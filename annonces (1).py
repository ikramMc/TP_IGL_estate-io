import requests
from bs4 import BeautifulSoup
import json
from tqdm import tqdm
import json
import pymysql.cursors

HEADERS = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; rv:91.0) Gecko/20100101 Firefox/91.0'
    }


def get_annonce_infos(url):
    response = requests.get(url, headers=HEADERS)
    if response.status_code != 200:
        return None
    
    nature, type, region, address, title, description, price, surface, insertion_date, last_update_date = None, None, None, None, None, None, None, None, None, None
    
    soup = BeautifulSoup(response.text, 'html5lib')

    title = " ".join(soup.select("tr.da_entete > td")[0].text.split(" ")[1:])
    insertion_date, last_update_date = [e.text for e in soup.select("body > table:nth-child(1) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr > td:nth-child(4) > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(1) > td > table:nth-child(3) > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(even)")[-2:]]

    for i in range(3, 14, 2):
        try:
            field = soup.select(f"table tr:nth-child({i}) > td.da_label_field")[0].text
            if field == "Catégorie":
                nature, type = [a.text for a in soup.select(f"table tr:nth-child({i}) > td.da_field_text > a")[1:]]
            elif field == "Localisation":
                region = soup.select(f"table tr:nth-child({i}) > td.da_field_text > a")[-1].text.strip()
            elif field == "Adresse":
                address = soup.select(f"table tr:nth-child({i}) > td.da_field_text")[0].text.strip()
            elif field == "Surface":
                surface = soup.select(f"table tr:nth-child({i}) > td.da_field_text")[0].text.strip().split("\u00a0")[0].replace(" ", "")
            elif field == "Prix":
                price = soup.select(f"table tr:nth-child({i}) > td.da_field_text")[0].text.split("\u00a0")[0].strip().replace(" ", "")
            elif field == "Texte":
                description = soup.select(f"table tr:nth-child({i}) > td.da_field_text")[0].text.strip()
        except:
            continue
    
    return {"nature": nature, "type": type, "region": region, "address": address, "title": title, "description": description,
    "price": price, "surface": surface, "insertion_date": insertion_date, "last_update_date": last_update_date}


def get_page_data(page_num=1):

    url = f'http://www.annonce-algerie.com/AnnoncesImmobilier.asp?rech_cod_cat=1&rech_cod_rub=&rech_cod_typ=&rech_cod_sou_typ=&rech_cod_pay=DZ&rech_cod_reg=&rech_cod_vil=&rech_cod_loc=&rech_prix_min=&rech_prix_max=&rech_surf_min=&rech_surf_max=&rech_age=&rech_photo=&rech_typ_cli=&rech_order_by=31&rech_page_num={page_num}'

    
    response = requests.get(url, headers = HEADERS)

    if response.status_code != 200:
        return None
    
    print("Crawling page number", page_num)

    soup = BeautifulSoup(response.text, 'html.parser')

    domain = "http://www.annonce-algerie.com/"
    annonces_links = soup.select('tr:nth-child(3) table:nth-child(1) tr:nth-child(n+8) > td:nth-child(8n)')
    annonces_links = [domain+d.find('a')["href"] for d in annonces_links]

    annonces = []
    for link in tqdm(annonces_links):
        annonces.append(get_annonce_infos(link))
    
    return annonces


def scrap():
    num_page = 1
    annonces = []
    while True:
        annonces_tmp = get_page_data(num_page)
        num_page += 1
        if annonces_tmp is not None and len(annonces_tmp) > 0:
            annonces += annonces_tmp
        else:
            return annonces

annonces = scrap()

with open("annonces.json", "w") as f:
    json.dump(annonces, f)
    
    
json_data=open("annonces.json").read()
json_obj=json.loads(json_data)
cnx=pymysql.connect(host="localhost", user="root", password="Ma*15102002", db="ai_app")
cursor=cnx.cursor()

for item in json_obj :
    nature = item.get("nature")
    vente = item.get("vente")
    type = item.get("type")
    region = item.get("region")
    address = item.get("address")
    title = item.get("title")
    description = item.get("description")
    price  = item.get("price")
    surface  = item.get("surface")
    insersion_date  = item.get("insertion_data")
    last_update_date  = item.get("last_update_date")
    cursor.execute("insert into scrapped(nature,vente,type,region,address,title,description,price,surface,insersion_date,last_update_date) value(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", (nature,vente,type,region,address,title,description,price,surface,insersion_date,last_update_date))
    cnx.commit()
   
const{By,Key,Builder,WebDriver}=require("selenium-webdriver")
const{Options} =require("selenium-webdriver/chrome");
const _http =require('selenium-webdriver/http')

require("chromedriver")
async function test(){
    let chromeOptions=await new Options();
     chromeOptions.addArguments("user-data-dir=C:\\Users\\Len\\AppData\\Local\\Google\\Chrome\\User Data")
     chromeOptions.addArguments("profile-directory=Profile 7")
      let driver= new Builder().forBrowser("chrome").setChromeOptions(chromeOptions).build();
      await  driver.get("http://localhost:3000/ajouterAnnonce");
      await driver.findElement(By.name("titre")).sendKeys("apparatement f3");
      await driver.findElement(By.name("categorie")).sendKeys("vente");
      await driver.findElement(By.name("type")).sendKeys("appartement");
      await driver.findElement(By.name("wilaya")).sendKeys("Alger");
      await driver.findElement(By.name("commune")).sendKeys("Alger Centre");
      await driver.findElement(By.name("adresse")).sendKeys("rue 14 cité...");
      //await driver.executeScript("document.getElementById('map').setAttribute('defaultLocation', { lat: 38.7, lng: 2.985})");
      //await driver.findElement(By.id("map")).setAttribute('defaultLocation', { lat: 3.7, lng: 2.985});
      await driver.findElement(By.name("surface")).sendKeys(150);
      await driver.findElement(By.name("des")).sendKeys("description");
      await driver.findElement(By.name("images")).sendKeys("C:\\Users\\Len\\Downloads\\appartement.jpg");
      await driver.findElement(By.name("prix")).sendKeys(4500000);
     
      setInterval(function(){driver.findElement(By.name("ajouterAnnonce")).click();},5000);
      //setInterval(function(){driver.quit();},10000);
      //await driver.findElement(By.name("ajouter")).click();
     // driver.quit()
   // builder=await new Builder().forBrowser("chrome").build();
   // builder.Options=chromeOptions;
    
    //await driver.get("http://localhost:3000/pageuser");
   // await driver.findElement(By.name("q")).sendKeys("helloworld",Key.RETURN);
   // setInterval(function(){driver.quit();},10000);


}
test();
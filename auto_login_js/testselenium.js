/**
 * Created by admin on 2015/12/04.
 */
/**Javascriptで具現してみました〜
 * npm install selenium-webdriverで設置したあと実行すれば良い**/
//必要なものを持ってくる
var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
withCapabilities(webdriver.Capabilities.chrome()).
build();


//GakuNinのページへ移動
driver.get('https://student.iimc.kyoto-u.ac.jp/');
//このfindElementhttp://selenium.googlecode.com/git/docs/api/javascript/class_webdriver_WebDriver.htmlなどで説明確認可能
//またwebdriverJSと検索すれば情報が出る
driver.findElement(webdriver.By.className('btn')).click();


//ここでIDとPW入力される
driver.findElement(webdriver.By.name('j_username')).sendKeys('ID');
driver.findElement(webdriver.By.name('j_password')).sendKeys('PW');
//Keys.ENTERがなんかできなかったそれでSubmitすることで解決
driver.findElement(webdriver.By.name('j_password')).submit();

//クラシス入る
driver.findElement(webdriver.By.className('btn-primary')).click().then(function(){

//ここで新しいwindowで表示されるのでseleniumに新しいやつを見て！ということをする必要がある
    //あと.then(){}これはJSの文法のせいでこう作ったけど。。説明は一旦省略
driver.getAllWindowHandles().then(function (handles) {
    //新しいwindowみて
    driver.switchTo().window(handles[1]);
    //そこから後期の時間割をクリックして
    driver.findElement(webdriver.By.xpath("//img[@alt='時間割(後期)']")).click();
    //そのままちょっと待ってくれ
    driver.sleep(5000);
});

})

//もうバイバイ
driver.quit();

//一旦これで基礎的なことの説明完了



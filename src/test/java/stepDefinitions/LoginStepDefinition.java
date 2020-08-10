package stepDefinitions;
import java.util.concurrent.TimeUnit;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class LoginStepDefinition{
//
	    WebDriver driver;
	/*
	 * //@FindBy(xpath="//*[@id=\"nav-link-accountList\"]/div/span") Sign_in =
	 * driver.findElement(By.xpath("//*[@id=\"nav-link-accountList\"]/div/span"));
	 * //WebElement Sign_in;
	 * 
	 * // @FindBy(xpath ="//*[@id=\"nav-flyout-ya-signin\"]/a/span") WebElement
	 * SigninBtn =
	 * driver.findElement(By.xpath("//*[@id=\"nav-link-accountList\"]/div/span"));
	 * 
	 * //@FindBy(xpath = "//*[@id=\"ap_email\"]") WebElement email =
	 * driver.findElement(By.xpath("//*[@id=\"ap_email\"]"));
	 * 
	 * //@FindBy(xpath="//*[@id=\"continue\"]") WebElement btncontinue =
	 * driver.findElement(By.xpath("//*[@id=\"continue\"]"));
	 * 
	 * //@FindBy(xpath="//input[@id =\"ap_password\"]") WebElement password =
	 * driver.findElement(By.xpath("//input[@id =\"ap_password\"]"));
	 * 
	 * //@FindBy(xpath="//*[@id=\"signInSubmit\"]") WebElement Signinbutton =
	 * driver.findElement(By.xpath("//*[@id=\"signInSubmit\"]"));
	 * 
	 * //@FindBy(xpath="//*[@id=\"nav-link-accountList\"]/div/span") WebElement
	 * TitleofLogin =
	 * driver.findElement(By.xpath("//*[@id=\"nav-link-accountList\"]/div/span"));
	 */
				
	
//
//	Step1
	 @Given(value = "^user is already on Login Page$")
	 public void user_already_on_login_page(){
	 //System.out.println("inside Given");
	 System.setProperty("webdriver.chrome.driver","C:\\users\\ChagantiRamam\\Desktop\\New folder\\chromedriver\\chromedriver.exe");
	 driver = new ChromeDriver();
	 driver.get("https://www.amazon.in/");
	 }
	
//	Step2
	 @When(value = "^title of login page is Amazon$")
	 public void title_of_login_page_is_Amazon(){
	 String title = driver.getTitle();
	 driver.manage().window().maximize();
	 driver.manage().deleteAllCookies();
	 driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
	 driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	 //System.out.println(title);
	 Assert.assertEquals("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in", title);
	 }
	
//	 //Reg Exp:
//	 //1. \"([^\"]*)\"
//	 //2. \"(.*)\"
//	Step3
	 @Then(value = "^user enters \"(.*)\" and \"(.*)\"$")
	 public void user_enters_username_and_password(String emailId, String pwd) throws InterruptedException{
	 Thread.sleep(2000);
	 //driver.switchTo().frame(1);
	 Actions action = new Actions(driver);
     action.moveToElement(driver.findElement(By.xpath("//*[@id=\"nav-link-accountList\"]/div/span"))).build().perform();
     
	 //JavascriptExecutor js =
	 //(JavascriptExecutor)driver;
	 //js.executeScript("arguments[0].click();",SigninBtn);
     //SigninBtn.click();
       driver.findElement(By.xpath("//*[@id=\"nav-link-accountList\"]/div/span")).click();	 
       driver.findElement(By.xpath("//*[@id=\"ap_email\"]")).sendKeys(emailId);
       driver.findElement(By.xpath("//*[@id=\"continue\"]")).click(); 
	   driver.findElement(By.xpath("//input[@id =\"ap_password\"]")).sendKeys(pwd);
	    
	 }
	
//	 Step4
	 @Then(value = "^user clicks on login button$")
	 public void user_clicks_on_login_button() {
		driver.findElement(By.xpath("//*[@id=\"signInSubmit\"]")).click();
			
	 }
//	
//	Step5
	 @Then(value = "^user is on home page$")
	 public void user_is_on_hopme_page(){
		String title = driver.findElement(By.xpath("//*[@id=\"nav-link-accountList\"]/div/span")).getText();
		Assert.assertEquals("Hello, Kamala", title);
	 }
//	 
//	 @Then("^user moves to new contact page$")
//	 public void user_moves_to_new_contact_page() {
//		driver.switchTo().frame("mainpanel");
//		Actions action = new Actions(driver);
//		action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"))).build().perform();
//		driver.findElement(By.xpath("//a[contains(text(),'New Contact')]")).click();
//		
//		}
//	 
//	 
//	 @Then("^user enters contact details \"(.*)\" and \"(.*)\" and \"(.*)\"$")
//	 public void user_enters_contacts_details(String firstname, String lastname, String position){
//		 driver.findElement(By.id("first_name")).sendKeys(firstname);
//		 driver.findElement(By.id("surname")).sendKeys(lastname);
//		 driver.findElement(By.id("company_position")).sendKeys(position);
//		 driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
//	 }
	 
//   Step6
	 @Then(value = "^Close the browser$")
	 public void close_the_browser(){
		 driver.quit();
	 }
	
//	
//	
//
}

# -*- coding: utf-8 -*- 
from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.common.keys import Keys
import time


if __name__ == "__main__":
	driver = webdriver.Chrome(executable_path="./chromedriver") #chromedriverへのパスを与えてあげる必要があった
	driver.get("https://student.iimc.kyoto-u.ac.jp/")
	driver.find_element_by_class_name("btn").click()

	
	#GakuNinのページへ
	Username = driver.find_element_by_name("j_username")
	Password = driver.find_element_by_name("j_password")
	
	Username.send_keys("")	#自分のECS-IDをここに入力
	Password.send_keys("")	#自分のパスワードをここに入力
	Password.send_keys(Keys.ENTER)
	

	#全共ポータルのページへ
	driver.find_element_by_class_name("btn-primary").click()
	time.sleep(3)	#ページ読み込みのためのスリープ

	#新しいタブに操作画面を切り替えている
	#これがないとタブ切り替えに対応できず、
	#新規タブを作成しても操作できない.
	for handle in driver.window_handles:
    		driver.switch_to_window(handle)	


	#KULASIS TOPへ
	driver.find_element_by_id("id_a_22_9").click()	#idはタームで変わると思われる.これは後期用


    #現在は後期の時間割ページに移動するところまでつくったよーーーーーーーーーーーーーーーーーーん

	#driver.close()	#ブラウザを閉じる。
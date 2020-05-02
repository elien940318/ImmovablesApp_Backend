# -*- coding: utf-8 -*-
import ssl
from bs4 import BeautifulSoup
import urllib.request
import os

class CityUtilCrawling:

    #시 코드 및 이름 조회
    def get_City_code_name(self, URL):
        source_code_from_URL = urllib.request.urlopen(URL)
        soup = BeautifulSoup(source_code_from_URL, 'html.parser', from_encoding='utf-8')
        link = []
        for list in soup.select('#rdnmcity1 > option'):
            if list['value'] != '':
                link.append(list['title'])
        return link

    def get_Country_code_name(self, URL):
        source_code_from_URL = urllib.request.urlopen(URL)
        soup = BeautifulSoup(source_code_from_URL, 'html.parser', from_encoding='utf-8')
        link = []
        for list in soup.select('div.pretty-print'):
            print(list)
            #if list['value'] != '':
                #link[list['value']] = list['title']
        return link

    def get_Road_code_name(self, URL):
        source_code_from_URL = urllib.request.urlopen(URL)
        soup = BeautifulSoup(source_code_from_URL, 'html.parser', from_encoding='utf-8')
        link = []
        for list in soup.select('#roadNameList2'):
            print(list)

    def food_get_link(self, URL):
        source_code_from_URL = urllib.request.urlopen(URL)
        soup = BeautifulSoup(source_code_from_URL, 'html.parser', from_encoding='utf-8')
        link = []
        '''http://recipekorea.com/
        for list in soup.find("ul", class_="webzine").find_all("li"):
            div = list.find("div", class_="webzineImg")
            link.append(div.find("a")["href"])
        '''

        for list in soup.select('td.mw_basic_list_subject'):

            list = list.find('a')['href']
            link.append(list)

        return link

    def text_get_link(self, URL):
        source_code_from_URL = urllib.request.urlopen(URL)
        soup = BeautifulSoup(source_code_from_URL, 'html.parser', from_encoding='utf-8')
        link = []
        for list in soup.select("p.subject"):
            a = list.find("a")["href"]
            link.append(a)

        return link

    def travel_photo_get_link(self, URL):
        source_code_from_URL = urllib.request.urlopen(URL)
        soup = BeautifulSoup(source_code_from_URL, 'html.parser', from_encoding='utf-8')
        link = []
        for list in soup.find("div", class_="theme_list_d3 getabout").find_all('li'):

            a = list.find("a")["href"]
            link.append(a)

        return link

    def music_get_link(self, URL):
        source_code_from_URL = urllib.request.urlopen(URL)
        soup = BeautifulSoup(source_code_from_URL, 'html.parser', from_encoding='utf-8')
        link = []
        for list in soup.select("div.text_subject"):
            a = list.find("a")["href"]
            link.append(a)
        return link

    def mobile_get_link(self, URL):
        context = ssl._create_unverified_context()
        source_code_from_URL = urllib.request.urlopen(URL, context=context)
        soup = BeautifulSoup(source_code_from_URL, 'html.parser', from_encoding='utf-8')
        link = []
        for list in soup.select("td.title"):
            a = list.find("a")["href"]
            link.append(a)
        return link

    def paint_get_link(self, URL):
        context = ssl._create_unverified_context()
        source_code_from_URL = urllib.request.urlopen(URL, context=context)
        soup = BeautifulSoup(source_code_from_URL, 'html.parser', from_encoding='utf-8')
        link = []
        for list in soup.select("div.thumbnail_wrapper"):
            a = list.find("a")["href"]
            link.append(a)
        return link

    def get_text(self, URL):
        source_code_from_URL = urllib.request.urlopen(URL)
        soup = BeautifulSoup(source_code_from_URL, 'html.parser', from_encoding='utf-8')
        text = ''

        for item in soup.find_all('div', id='articleBodyContents'):
            text = text + str(item.find_all(text=True))

        return text

    def food_get_text(self, URL):
        source_code_from_URL = urllib.request.urlopen(URL)
        soup = BeautifulSoup(source_code_from_URL, 'html.parser', from_encoding='utf-8')
        text = ''
        '''https://www.82cook.com/entiz/
        for item in soup.find_all('div', id='articleBody'):
            text = text + str(item.find_all(text=True))
        '''
        '''http://recipekorea.com/'''
        for item in soup.select('div.contents_shop_view'):
            text = text + str(item.find_all(text=True))
        return text

    def text_get_text(self, URL):
        source_code_from_URL = urllib.request.urlopen(URL)
        soup = BeautifulSoup(source_code_from_URL, 'html.parser', from_encoding='utf-8')
        text = ''

        for item in soup.select('p.work_intro.tab_content'):

            text = text + str(item.find_all(text=True))

        return text

    def travel_photo_get_text(self, URL):
        source_code_from_URL = urllib.request.urlopen(URL)
        soup = BeautifulSoup(source_code_from_URL, 'html.parser', from_encoding='utf-8')
        text = ''
        for item in soup.select('div.article_contents'):
            text = text + str(item.find_all(text=True))

        return text

    def music_get_text(self, URL):
        source_code_from_URL = urllib.request.urlopen(URL)
        soup = BeautifulSoup(source_code_from_URL, 'html.parser', from_encoding='utf-8')
        text = ''
        for item in soup.select('#description'):
            text = text + str(item.find_all(text=True))
        return text

    def mobile_get_text(self, URL):
        context = ssl._create_unverified_context()
        source_code_from_URL = urllib.request.urlopen(URL, context=context)
        soup = BeautifulSoup(source_code_from_URL, 'html.parser', from_encoding='utf-8')
        text = ''
        for item in soup.select('div.contentBody > div > p'):
            text = text + str(item.find_all(text=True))
        return text

    def paint_get_text(self, URL):
        context = ssl._create_unverified_context()
        source_code_from_URL = urllib.request.urlopen(URL, context=context)
        soup = BeautifulSoup(source_code_from_URL, 'html.parser', from_encoding='utf-8')
        text = ''
        for item in soup.select('div.view_content.autolink > div > p'):
            text = text + str(item.find_all(text=True))
        return text

    def isInDirectory(self, path):
        fileNum = 0
        try:
            if not (os.path.isdir(path)):
                os.makedirs(os.path.join(path))

            fileNum = len(os.walk(path).__next__()[2])
        except OSError as e:
            print("Failed to create directory!!!!!")

        return fileNum
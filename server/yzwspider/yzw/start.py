#!/usr/bin/python
import scrapy
from twisted.internet import reactor, defer
from scrapy.crawler import CrawlerRunner
from scrapy.utils.project import get_project_settings
from yzwspider.yzw.spiders import schools, subjects
from scrapy.utils.log import configure_logging
import os


# def start_requests(self):  # 重写框架方法，发送请求
#     with open("ss.txt", "r", encoding="utf-8") as f:
#         content = f.read()  # 读取文件内容
#     provinces = eval(content)  # 将字符串转化为列表
#     with open("zy.txt", "r", encoding="utf-8") as f:
#         content = f.read()  # 读取文件内容
#     categories = eval(content)  # 将字符串转化为列表
#     for province in provinces:
#         for category in categories:
#             print(province, category)
#             yield scrapy.FormRequest(self.url_1,
#                                      formdata={"ssdm": province["dm"], "yjxkdm": category["dm"]},
#                                      meta={'province': province, "category": category},  # 传递参数
#                                      callback=self.parse_school_size)  # 发送post请求

def startup(my_settings={}):
    os.environ.setdefault('SCRAPY_SETTINGS_MODULE', 'yzwspider.yzw.settings')
    settings = get_project_settings()
    for key, value in my_settings.items():
        settings.attributes[key].value = value
    configure_logging(settings)
    runner = CrawlerRunner(settings)

    @defer.inlineCallbacks
    def crawl():
        yield runner.crawl(subjects.SubjectsSpider)
        yield runner.crawl(schools.SchoolsSpider)
        reactor.stop()

    crawl()
    reactor.run()


if __name__ == '__main__':
    startup()

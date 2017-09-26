import dogTypeData from './dogType.json'
import mockDogFood from './mockDogFood.json'
import mockDogBrand from './mockDogBrand.json'
import mockDogHome from './mockDogHome.json'
import Mock from 'mockjs'

Mock.mock('/dog/type', {code: 'succeed', data: dogTypeData.categorys} )
Mock.mock('/dog/food', {code: 'succeed', data: mockDogFood['cate_list']} )
Mock.mock('/dog/brand', {code: 'succeed', data: mockDogBrand.brand} )
Mock.mock('/dog/menus', {code: 'succeed', data: mockDogHome.menus} )
Mock.mock('/dog/datas/carousel', {data: mockDogHome.datas[0]})
Mock.mock('/dog/datas/menus2', {data: mockDogHome.datas[2]})
Mock.mock('/dog/datas/dynamics', {data: mockDogHome.datas[16]})

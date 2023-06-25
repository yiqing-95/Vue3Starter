import httpInstance from '@/utils/request'

export function getCategories(){
    return httpInstance({
        url: '/categories'
    })
}
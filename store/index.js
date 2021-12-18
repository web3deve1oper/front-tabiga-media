import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedOrder1: [],
            loadedOrder2: [],
            loadedRandomArticles: [],
            loadedOrder3: [],
            loadedOrder4: [],
            loadedOrder5: [],
            loadedOrder6: [],
            loadedRedBook: [],
            loadedRubrics: [],
            loadedFavourites: [],
            loadedDailyArticle: {}
        },
        mutations: {
            setOrder1(state, info) {
                state.loadedOrder1 = info
            },
            setOrder2(state, info) {
                state.loadedOrder2 = info
            },
            setRandomArticles(state, info) {
                state.loadedRandomArticles = info
            },
            setOrder3(state, info) {
                state.loadedOrder3 = info
            },
            setOrder4(state, info) {
                state.loadedOrder4 = info
            },
            setOrder5(state, info) {
                state.loadedOrder5 = info
            },
            setOrder6(state, info) {
                state.loadedOrder6 = info
            },
            setRedBook(state, info) {
                state.loadedRedBook = info
            },
            setRubrics(state, info) {
                state.loadedRubrics = info
            },
            setFavourites(state, info) {
                state.loadedFavourites = info
            },
            setDailyArticle(state, info) {
                state.loadedDailyArticle = info
            }
        },
        actions: {
            async nuxtServerInit(VuexContext, context) {
                const order1Response = await context.$axios.get(process.env.API + 'articles?filter[rubric.order]=1&filter[posted]=1&sort=-posted_at&itemsPerPage=10&include=rubric')
                VuexContext.commit('setOrder1', order1Response.data.data.data)

                const randomArticlesResponse = await context.$axios.get(process.env.API + 'random-articles?filter[posted]=1&sort=-posted_at&itemsPerPage=8&include=rubric')
                VuexContext.commit('setRandomArticles', randomArticlesResponse.data.data)

                const order2Response = await context.$axios.get(process.env.API + 'articles?filter[rubric.order]=2&filter[posted]=1&sort=-posted_at&itemsPerPage=4&include=rubric')
                VuexContext.commit('setOrder2', order2Response.data.data.data)

                const order3Response = await context.$axios.get(process.env.API + 'articles?filter[rubric.order]=3&filter[posted]=1&sort=-posted_at&itemsPerPage=6&include=rubric,author')
                VuexContext.commit('setOrder3', order3Response.data.data.data)

                const order4Response = await context.$axios.get(process.env.API + 'articles?filter[rubric.order]=4&filter[posted]=1&sort=-posted_at&itemsPerPage=4&include=rubric,author')
                VuexContext.commit('setOrder4', order4Response.data.data.data)

                const order5Response = await context.$axios.get(process.env.API + 'articles?filter[rubric.order]=5&filter[posted]=1&sort=-posted_at&itemsPerPage=4&include=rubric')
                VuexContext.commit('setOrder5', order5Response.data.data.data)

                const order6Response = await context.$axios.get(process.env.API + 'articles?filter[rubric.order]=6&filter[posted]=1&sort=-posted_at&itemsPerPage=8&include=rubric,author')
                VuexContext.commit('setOrder6', order6Response.data.data.data)

                const redBookResponse = await context.$axios.get(process.env.API + 'red-book?sort=-posted_at&itemsPerPage=4')
                VuexContext.commit('setRedBook', redBookResponse.data.data.data)

                const rubricsResponse = await context.$axios.get(process.env.API + 'rubrics')
                VuexContext.commit('setRubrics', rubricsResponse.data.data.data)

                const favouriteResponse = await context.$axios.get(process.env.API + 'articles?filter[favourite]=1&filter[posted]=1&sort=-posted_at&itemsPerPage=3&include=rubric,author')
                VuexContext.commit('setFavourites', favouriteResponse.data.data.data)

                const dailyArticleResponse = await context.$axios.get(process.env.API + 'daily-article?include=rubric')
                VuexContext.commit('setDailyArticle', dailyArticleResponse.data.data)
            },

            setOrder1(vuexContext, order1Info) {
                vuexContext.commit('setOrder1', order1Info)
            },
            setRandomArticles(vuexContext, randomArticlesInfo) {
                vuexContext.commit('setRandomArticles', randomArticlesInfo)
            },
            setOrder2(vuexContext, order2Info) {
                vuexContext.commit('setOrder2', order2Info)
            },
            setOrder3(vuexContext, order3Info) {
                vuexContext.commit('setOrder3', order3Info)
            },
            setOrder4(vuexContext, order4Info) {
                vuexContext.commit('setOrder4', order4Info)
            },
            setOrder5(vuexContext, order5Info) {
                vuexContext.commit('setOrder5', order5Info)
            },
            setOrder6(vuexContext, order6Info) {
                vuexContext.commit('setOrder6', order6Info)
            },
            setRedBook(vuexContext, redBookInfo) {
                vuexContext.commit('setRedBook', redBookInfo)
            },
            setRubrics(vuexContext, rubricsInfo) {
                vuexContext.commit('setRubrics', rubricsInfo)
            },
            setFavourites(vuexContext, favouriteInfo) {
                vuexContext.commit('setFavourites', favouriteInfo)
            },
            setDailyArticle(vuexContext, dailyArticleInfo) {
                vuexContext.commit('setDailyArticle', dailyArticleInfo)
            }
        },
        getters: {
            loadedOrder1(state) {
                return state.loadedOrder1
            },
            loadedRandomArticles(state) {
                return state.loadedRandomArticles
            },
            loadedOrder2(state) {
                return state.loadedOrder2
            },
            loadedOrder3(state) {
                return state.loadedOrder3
            },
            loadedOrder4(state) {
                return state.loadedOrder4
            },
            loadedOrder5(state) {
                return state.loadedOrder5
            },
            loadedOrder6(state) {
                return state.loadedOrder6
            },
            loadedRedBook(state) {
                return state.loadedRedBook
            },
            loadedRubrics(state) {
                return state.loadedRubrics
            },
            loadedFavourites(state) {
                return state.loadedFavourites
            },
            loadedDailyArticle(state) {
                return state.loadedDailyArticle
            }
        }
    })
}

export default createStore
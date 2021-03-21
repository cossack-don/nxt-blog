import axios from 'axios'


export const state = () => ({
    statePostsLoaded: [],
    token:null,
    // мб скрыть потом commentsLoaded: [],
    // commentsLoaded: [],
    
})




export const mutations = {

    mutationsSetPosts(state, posts) {
        state.statePostsLoaded = posts
    },

    // -----------------------------
    mutationsAddPost(state, post) {
       
        state.statePostsLoaded.push(post)
    },
    // -----------------------------

    mutationsEditPost(state, postEdit) {
        const postIndex = state.statePostsLoaded.findIndex(post => post.id === postEdit.id)
        state.statePostsLoaded[postIndex] = postEdit

    },

    // -----------------------------
    // mutationsAddComment(state, comment) {
    //     console.log(comment)
    //     state.commentsLoaded.push(comment)
    // },

        // -----------------------------
            // -----------------------------
            setToken(state, token) {
             
            state.token = token
        }
}





export const actions = {
    // подгрузка всех постов
    nuxtServerInit({ commit }, contex) {
        return axios.get('https://nxt-blog-3562d-default-rtdb.firebaseio.com/posts.json')
            .then(res => {

                const postsArray = []
                for (let key in res.data) {
                    postsArray.push({ ...res.data[key], id: key })
                }
                // res
                commit('mutationsSetPosts', postsArray)
            })
            .catch(e => {
                console.log(e)
            })
    },
    // --------------------------------
    authUser({commit}, authData) {
        const key = 'AIzaSyDFjsKNK3VB_JQ1JZ56kAQz3h360pJb6OY'
        return axios.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${key}`, {
            email: authData.email, 
            password:authData.password,
            returnSecureToken:true
        })
        .then( (res) => {
            commit('setToken', res.data.idToken)
        })
        .catch(e => console.log(e))
        // на регистрацию!!! через firebase auth
        // https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=[API_KEY]

        // на вход в кабинет есть ли такой пользователь или нет, если нет , выдавать ошибку
        // https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=[API_KEY]
       
        
    },
    // --------------------------------
    // post = payload
    // добавление поста
    actionAddPost({ commit }, post) {
        return axios.post('https://nxt-blog-3562d-default-rtdb.firebaseio.com/posts.json', post)
            .then(res => {
                // console.log(res)
                commit('mutationsAddPost', { ...post, id: res.data.name })
            })
            .catch(e => {
                console.log(e)
            })
    },
    // --------------------------------
    // изменение поста
    actionEditPost({ commit }, post) {
        return axios.put(`https://nxt-blog-3562d-default-rtdb.firebaseio.com/posts/${post.id}.json`, post)
            .then(res => {
                commit('mutationsEditPost', post)
            })
            .catch(e => console.log(e))
    },

    // добавление коммента
    actionAddComment({ commit }, comment) {
        return axios.post('https://nxt-blog-3562d-default-rtdb.firebaseio.com/comments.json', comment)
            // .then(res => {
            //     // console.log(res)
            //     commit('mutationsAddComment', { ...comment, id: res.data.name })
            // })
            .catch(e => {
                console.log(e)
            })
    }
}

export const getters = {
    getPostsLoaded(state) {
        return state.statePostsLoaded
    },


    checkAuthUser(state) {
        return state.token != null
    }
}
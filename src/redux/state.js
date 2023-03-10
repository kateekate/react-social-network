import ava1 from './../img/avatars/ava1.jpeg'
import ava2 from './../img/avatars/ava2.jpeg'
import ava3 from './../img/avatars/ava3.jpeg'
import ava4 from './../img/avatars/ava4boy.jpeg'
import ava5 from './../img/avatars/ava6boy.jpeg'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let store = {
  _state: {
    profilePage: {
      posts: [
        {
          contain: 'i love my blog',
          count: 6
        },
        {
          contain: 'let I show u my new pics',
          count: 20
        },
        {
          contain: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
          count: 1
        }
      ],
      newPostText: 'hehehehehe'
    },

    dialoguesPage: {
      dialoguesData: [
        { id: 1, name: 'Rue' },
        { id: 2, name: 'Fezco' },
        { id: 3, name: 'Maddy' },
        { id: 4, name: 'Nathaniel' },
        { id: 5, name: 'Jules' },
      ],
      messages: [
        { message: 'ok' },
        { message: 'wassup boy' },
        { message: 'u re bitch' },
        { message: 'love' },
        { message: 'btw u late' },
      ]
    },

    navBlockFriends: {
      friends: [
        {
          name: 'Rue',
          img: ava1,
        },
        {
          name: 'Fezco',
          img: ava4,
        },
        {
          name: 'Maddy',
          img: ava3,
        },
        {
          name: 'Nathaniel',
          img: ava5,
        },
        {
          name: 'Jules',
          img: ava2,
        },
      ]
    }
  },
  _callSubscriber() {
    console.log('state changed')
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  addPost() {

  },
  updateNewPostText(newText) {

  },

  dispatch(action) {
    if (action.type === 'ADD-POST') {
      const newPost = {
        contain: this._state.profilePage.newPostText,
        count: 0,
      }
      this._state.profilePage.posts.unshift(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state)
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText
      this._callSubscriber(this._state)
    }
  }

}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
})

export default store

import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './UsersSlice'

const Store = configureStore(
    {
        reducer: {
            users: UserSlice
        }
    }
)

export default Store
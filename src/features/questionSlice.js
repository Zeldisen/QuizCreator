import { createSlice } from "@reduxjs/toolkit"


//[{id:1, question:'', answer:'', amountAnswer, correctAnswer:''}]
const initialState = {
    questions: []
}

const questionSlice = createSlice({
    name: 'quizQuestion',
    initialState,
    reducers: {
        addQuestion: (state) => {

        }
        //removeQuesion
        //editQuestion
    }
})

export const{addQuestion} = questionSlice.actions;

export default questionSlice.reducer;
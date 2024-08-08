const {createApp} = Vue;

createApp({
    data(){
        return{
            list : ['아이스커피','새로','처음처럼','후레쉬','진로'],
            objArr : [
                {site:'양양', taketime:'3시간'},
                {site:'제주도', taketime:'4시간'},
                {site:'서울', taketime:'5시간'},
            ],
            myArr : ['일','이','삼','사','오'],
            numArr : [1,2,3,4,5]
        }
    },
    methods: {
        addList(){
            this.myArr.push('추가');
        },
        addListIndex(arg){
            this.myArr.splice(arg, 0, '삽입'); // 배열 요소를 제거 하고 새로운 값으로 대체
        },
        changeList(arg){
            this.myArr.splice(arg, 1, '수정');
        },
        deleteList(arg){
            this.myArr.splice(arg, 1);
        }
    },
}).mount("#app")
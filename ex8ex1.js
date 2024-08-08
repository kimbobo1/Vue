(function(){

    const {createApp} = Vue;
    
    createApp({
        data(){
            return{
                irum:'1',
                java:'',
                React:'',
                Vue:'',
                a:'1',
                totald:'',
            }
        },
        methods: {
          
            myChange1(){
                this.message = irum,fullName
            },
            total(event){
               this.totald.push()
                
            }
        },
        computed: {
            // 계산된 식으로 값을 보여줄 때 사용하는 옵션
            fullName: function() {
                return this.java +this.React+this.Vue;
            },
        }
    }).mount('#app')
})();
const { createApp } = Vue;
      createApp({
        data() {
          return {
            jikwon: [],
            jik: "",
            avgPay: 0,
          };
        },
        methods: {
          inputCheck() {
            if (this.jik === "") {
              alert("직급을 입력해 주세요");
              return;
            }
            this.jikwonFunc();
          },
          jikwonFunc() {
            axios
              .get("http://localhost/jikwon/" + this.jik)
              .then((data) => {
                this.jikwon = data.data;
                this.avgPay = this.jikwon.reduce((result, jd) => {
                  return (result += parseInt(jd.pay));
                }, 0);
              })
              .catch((err) => {
                console.log("ERROR : ", err);
              });
          },
        },
      }).mount("#app");
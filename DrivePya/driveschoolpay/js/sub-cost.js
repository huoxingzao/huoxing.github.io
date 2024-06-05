window.onload = function () {
    axios.get('http://localhost:8080/subCost/cost', {})
        .then(resp => {
            console.log(resp)
            let cost = resp.data.data;
            // 设置 span 元素的文本内容
            document.getElementById("kemu1").innerText=cost[0];
            document.getElementById("kemu2").innerText=cost[1];
            document.getElementById("kemu3").innerText=cost[2];
            document.getElementById("kemu4").innerText=cost[3];
        })
        .catch(err => {
            console.log(err)
        })
    // event.preventDefault(); // 阻止默认的链接跳转行为
    // window.confirm('你点击了“考试费用支付”链接！');
}


const tweet = document.getElementById("btn_tweet");
let p2 = document.getElementById("p2");
let res = document.getElementById("p3");
let msg = "";
let tweets = [];

if(localStorage.getItem("tweets") !== null) {
	tweets = localStorage.getItem("tweets").split(",");
	
	p2.innerHTML = `Existem ${tweets.length} mensagem(s):`;
	
	for(let i = 0; i < tweets.length; i++) {
		res.innerHTML += `<p style="border: solid 1px gray; padding: 5px;">${tweets[i]}</p>`;
	}	
}

tweet.addEventListener("click", () => {
	event.preventDefault();
	
	msg = document.getElementById("msg").value ;

	if (msg !== "") {
		tweets.push(msg);
		localStorage.setItem("tweets", tweets);
		p2.innerHTML = `Existem ${tweets.length} mensagem(s):`;
	}
	else {
		alert("Favor digitar uma mensagem!");
		return;
	}    
	
	res.innerHTML = "";
	for(let i = 0; i < tweets.length; i++) {
		res.innerHTML += `<p style="border: solid 1px gray; padding: 5px;">${tweets[i]}</p>`;
	}    
});
document.addEventListener("DOMContentLoaded", function(){
    const usernameElement = document.querySelector("#username");
    const avatarElement = document.querySelector("#avatar");
    const repostElement = document.querySelector("#repos");
    const followersElement = document.querySelector("#followers");
    const followingElement = document.querySelector("#following");
    const linkElement = document.querySelector("#link");

    fetch("https://api.github.com/users/Renannporto")
    .then(function(rest){
        return rest.json();
    })
    .then(function(json){
        usernameElement.innerText = json.login;
        avatarElement.src = json.avatar_url;
        followingElement.innerText = json.following;
        followersElement.innerText = json.followers;
        repos.innerText = json.public_repos;
        linkElement.href = json.html_url;
    })
})
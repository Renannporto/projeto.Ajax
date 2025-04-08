document.addEventListener("DOMContentLoaded", function(){
    const usernameElement = document.querySelector("#username");
    const avatarElement = document.querySelector("#avatar");
    const repostElement = document.querySelector("#repos");
    const followersElement = document.querySelector("#followers");
    const followingElement = document.querySelector("#following");
    const linkElement = document.querySelector("#link");

    fetch("https://api.github.com/users/Renannporto")
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Erro na requisição: " + response.status);
            }
            return response.json();
        })
        .then(function (json) {
            usernameElement.innerText = json.login;
            avatarElement.src = json.avatar_url;
            followingElement.innerText = json.following;
            followersElement.innerText = json.followers;
            repostElement.innerText = json.public_repos;
            linkElement.href = json.html_url;
        })
        .catch(function (error) {
            console.error("Erro ao buscar dados do GitHub:", error);
            usernameElement.innerText = "Erro ao carregar usuário";
        });
})
<template>
    <div class="container">
        <div class="header-box">
            <div class="logo">
                <h1>A.L</h1>
            </div>
            <div class="menu">
                <a href="#about">About</a>
                <a href="#skills">My Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
            <div class="icons">
                <a href="https://www.linkedin.com/in/allan-leherpeux-6b2953257/"><img
                        src="https://img.icons8.com/fluency/100/null/linkedin-2.png" /></a>
                <a href="https://github.com/Rodzpm"><img
                        src="https://img.icons8.com/color-glass/100/null/github--v1.png" /></a>
            </div>
        </div>
        <div class="content-box">
            <div id="about">
                <div class="jumbo-text">
                    <h1>Allan</h1>
                    <h1>Leherpeux</h1>
                    <h5 style="color:#48ACF0;">Epitech Student</h5>
                </div>
                <div class="println">
                    <h1>System</h1>
                    <h1 style="color:white;">.</h1>
                    <h1 style="color:#e06c75;">out</h1>
                    <h1 style="color:white;">.</h1>
                    <h1 style="color:#61afef;">println</h1>
                    <h1>("</h1>
                    <h1 style="color:#fa8231;">Hello World!</h1>
                    <h1>");</h1>
                </div>
            </div>
            <div id="skills">
                <div class="skills-text">
                    I'm a developper
                </div>
                <div class="language-box">
                    <div class="language">
                        <img id="part1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/380px-C_Programming_Language.svg.png?20201031132917"
                            alt="" />
                        <img id="part1" src="https://i.ibb.co/MhN9zFx/Untitled-design-13-removebg-preview.png" alt="">
                        <h2 id="part1">5 months</h2>
                        <h1 id="part2">Language</h1>
                        <h1 id="part2" style="color:#e06c75;">C</h1>
                        <h1 id="part2">Low-level</h1>
                    </div>
                    <div class="language">
                        <img id="part1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
                            alt="" />
                        <img id="part1" src="https://i.ibb.co/MhN9zFx/Untitled-design-13-removebg-preview.png" alt="">
                        <h2 id="part1">4 years</h2>
                        <h1 id="part2">Language</h1>
                        <h1 id="part2" style="color:#e06c75;">Python</h1>
                        <h1 id="part2">High-level</h1>
                    </div>
                    <div class="language">
                        <img id="part1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Javascript_Logo.png/640px-Javascript_Logo.png"
                            alt="" />
                        <img id="part1" src="https://i.ibb.co/zZ0Xb7w/Untitled-design-12-removebg-preview.png" alt="">
                        <h2 id="part1">2 month</h2>
                        <h1 id="part2">Language</h1>
                        <h1 id="part2" style="color:#e06c75;">Javascript</h1>
                        <h1 id="part2">High-level</h1>
                    </div>
                </div>
                <div class="skills-text">
                    A futur game developper
                </div>
                <div class="game-box">
                    <img src="https://i.ibb.co/z4wV0qr/Untitled-design-7.png" alt="">
                    <h2>Crypted - In development</h2>
                    <h4 style="color: #e4bb68;">Platformer / Roguelike</h4>
                </div>
            </div>
            <div id="projects">
                <div class="skills-text">
                    My Projects
                </div>
                <div class="projects-box">
                    <div class="boite" v-for="item in data">
                        <a :href="item.html_url">
                            <div class="project">
                                <img :src="item.description" alt="">
                                <h3>{{item.name}}</h3>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div id="contact">
                <div class="skills-text">
                    Contact Me
                </div>
                <div class="contact-box">
                    <a href="https://www.linkedin.com/in/allan-leherpeux-6b2953257/">
                        <div class="boite-contact">
                            <img src="https://img.icons8.com/fluency/100/null/linkedin-2.png" alt="">
                            <h3>allan-leherpeux</h3>
                        </div>
                    </a>
                    <a href="https://github.com/Rodzpm">
                        <div class="boite-contact">
                            <img src="https://img.icons8.com/color-glass/100/null/github--v1.png" alt="">
                            <h3>rodzpm</h3>
                        </div>
                    </a>
                    <a href="mailto:allan.leherpeux@epitech.eu">
                        <div class="boite-contact">
                            <img src="https://img.icons8.com/color/48/null/apple-mail.png" alt="">
                            <h3>allan.leherpeux@epitech.eu</h3> 
                        </div>
                    </a>
                    <a href="https://discordapp.com/users/371202257955586050">
                        <div class="boite-contact">
                            <img src="https://img.icons8.com/color/100/null/discord-logo.png" alt="">
                            <h3>Allan_Leherpeux</h3> 
                        </div>
                    </a>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-flow: row;
    background-color: #1f2229;
    font-family: JetBrains Mono, monospace;
    color: white;
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    min-width: 100%;

}

.container .header-box {
    display: flex;
    flex-flow: column;
    width: 300px;
    position: fixed;
    min-height: 100%;
    font-size: 2em;
    text-align: center;
    justify-content: space-around;
    background-color: #1f2229;
}

.header-box .menu {
    display: flex;
    flex-flow: column;
    gap: 50px;
}

.container .content-box {
    width: 100%;
    padding: 50px;
    padding-left: 350px;
    background-color: #282c34;
}

#about{
    padding: 40px;
}

#about .jumbo-text {
    font-size: 5em;
}

#about .println {
    display: flex;
    flex-flow: row;
    margin-top: 7em;
    font-size: 2em;
    color: #e4bb68;
}

#skills {
    text-align: center;
    padding-top: 100px;
}

.skills-text {
    padding-top: 150px;
    font-size: 4em;
}


.language-box {
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    padding-top: 250px;
}

.language {
    display: flex;
    padding: 20px;
    border-radius: 20px;
    align-items: center;
    width: 250px;
    flex-flow: column;
    transition: 500ms;
}

.language #part2{
    display: none;
    transition: 500ms;
}

.language:hover{
    background-color: #48ACF0;
    transition: 500ms;
}

.language:hover #part1{
    transition: 500ms;
    display: none;
}

.language:hover #part2{
    display: flex;
    margin-top: 20px;
    transition: 500ms;

}

a {
    text-decoration: none;
    font-family: JetBrains Mono, monospace;
    transition: 500ms;
}

a:hover {
    color: #48ACF0;
    transition: 500ms;
}

.boite a:hover{
    color: white;
}

.icons img {
    width: 50px;
    margin-right: 30px;
}

.language img {
    width: 150px;
}

.game-box {
    display: flex;
    flex-flow: column;
    gap: 20px;
    padding-top: 30px;
}

.game-box img {
    margin-left: auto;
    margin-right: auto;
    border: 21px ridge #a73836;
    border-radius: 10px 10px 10px 10px;
    width: 300px;
}

#projects {
    text-align: center;
    padding-top: 100px;
}

.projects-box{
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    padding-top: 50px;
    align-items: baseline;
    align-content: space-around;
    justify-content: space-around;

}

.project{
    display: flex;
    flex-flow: column;
    gap: 10px;
    padding: 20px;
    margin-top: 20px;
    background-color: #A73836;
    border: 12px ridge #A73836;
    border-radius: 20px 20px 20px 20px;
    transition: 400ms;
}


.project:hover{
    background-color: #48ACF0;
    border: 12px ridge #48ACF0;
    transition: 400ms;
}

.project img{
    width: 400px;
}

#contact{
    display: flex;
    flex-flow: column;
    gap: 100px;
    text-align: center;
    padding-top: 100px;
}

.boite-contact{
    display: flex;
    flex-flow: row;
    gap: 20px;
    align-items:center
}

.boite-contact img{
    width: 50px;
}

.boite-contact h3{
    padding-top: 10px;
}

.contact-box{
    display: flex;
    flex-flow: column;
    flex-wrap: wrap;
    gap: 20px;
    align-items: baseline;
    align-content: space-around;
    justify-content: space-around;
}

@media screen and (max-width: 1763px) {
    #about .println {
        font-size: 1em;
    }
}

@media screen and (max-width: 1281px) {
    #about .jumbo-text {
        font-size: 2em;
    }
}
</style>

<script setup>
const images = [
"https://i.ibb.co/K6NKBjC/Untitled-design-9.png",
"https://i.ibb.co/0c8BBjT/IA-3.png",
"https://i.ibb.co/6P8D3t6/Untitled-design-8.png",
"https://i.ibb.co/b1pc4fP/IA.png",
"https://i.ibb.co/h7WYDhK/IA-1.png",
"https://i.ibb.co/JkB7q1V/Untitled-design-10.png",
"https://i.ibb.co/D1NhtKY/IA-2.png"
];
let data = await $fetch("/api/repo");
data = data.filter(val => val.name !== "Rodzpm");
data = data.filter(val => val.name !== "portfolio");
var i = 0;
if (data){
    data.forEach(element => {
        element.description = images[i];
        i += 1;
    });
}
</script>

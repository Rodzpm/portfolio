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
                <a href="https://www.linkedin.com/in/allan-leherpeux-6b2953257/"><img src="https://img.icons8.com/ios-filled/100/000000/linkedin-2--v1.png"/></a>
                <a href="https://github.com/Rodzpm"><img src="https://img.icons8.com/ios-glyphs/100/null/github.png"/></a>                
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
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/380px-C_Programming_Language.svg.png?20201031132917" alt=""/>
                        <img src="https://i.ibb.co/CtC08Wf/Untitled-design-5-removebg-preview.png" alt="">
                        <h2>2 months</h2>
                    </div>
                    <div class="language">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" alt=""/>
                        <img src="https://i.ibb.co/dmCQbZx/Untitled-design-3-removebg-preview.png" alt="">
                        <h2>5 years</h2>
                    </div>
                </div>  
                <div class="skills-text">
                    A future game developper
                </div>
                <div class="game-box">
                    <img src="https://i.ibb.co/z4wV0qr/Untitled-design-7.png" alt="">
                    <h2>Crypted - In development</h2>
                    <h3>Platformer / Rogue Like</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container{
    display: flex;
    flex-flow: row;
    background-color: #1f2229;
    font-family: JetBrains Mono, monospace;
    color: white;
    position: absolute;
    top: 0; left: 0;
    min-height: 100%;
    min-width: 100%;

}

.container .header-box{
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

.header-box .menu{
    display: flex;
    flex-flow: column;
    gap: 50px;
}

.container .content-box{
    width: 100%;
    padding: 50px;
    padding-left: 350px;
    background-color: #282c34;
}

#about .jumbo-text{
    font-size: 5em;
}

#about .println{
    display: flex;
    flex-flow: row;
    margin-top: 7em;
    font-size: 2em;
    color: #e4bb68;
}

#skills{
    text-align: center;
    padding-top: 100px;
}

#skills .skills-text{
    padding-top: 150px;
    font-size: 4em;
}

.language-box{
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    padding-top: 250px;
}

.language{
    display: flex;
    flex-flow: column;
}

a {
    text-decoration: none;
    font-family: JetBrains Mono, monospace;
    transition: 500ms;
}

a:hover{
    color:#48ACF0;
    transition: 500ms;
}

.icons img{
    width: 50px;
    margin-right: 30px;
}

.language img{
    width: 150px;
}

.game-box{
    display: flex;
    flex-flow: column;
    justify-content: center;
    padding-top: 30px;
}

.game-box img{
    border: 21px ridge #a73836;
    border-radius: 10px 10px 10px 10px;
    width: 300px;
}

@media screen and (max-width: 1763px){
    #about .println{
        font-size: 1em;
    }
}

@media screen and (max-width: 1281px){
    #about .jumbo-text{
        font-size: 2em;
    }
}
</style>

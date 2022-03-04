const titre = document.querySelector('h1');
charming(titre);

titre.addEventListener('mouseenter', (e) => {
    
    let lettres = Array.from(e.target.childNodes);
    // console.log(Math.floor(Math.random() * 500 - 250));
    
    // console.log(lettres);
    
    for(i = 0; i < lettres.length; i++) {

        TweenMax.to(lettres[i],1,{
            x: Math.floor(Math.random() * 500 - 250),
            y: Math.floor(Math.random() * 500 - 250),
            z: Math.floor(Math.random() * 500 - 250),
            rotation: Math.floor(Math.random() * 500 - 250),
            ease: Circ.easeOut
        })

    }


    titre.addEventListener('mouseleave', () => {

        for(k = 0; k < lettres.length; k++) {

            TweenMax.to(lettres[k],1,{
                x: 0,
                y: 0,
                z: 0,
                rotation: 0,
                ease: Power4.easeIn
            })

        }

    })

})

/*--Anim H2--*/
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


  const txtAnim = document.querySelector('p');


/*--Fin Anim H2--*/

/*--Anim Paragraphe--*/
new Typewriter(txtAnim, {
    //deleteSpeed: 20
})
.pauseFor(5000)
.changeDelay(50)
.typeString('On aime aime relever vos défis et apprendre chaque jour de nouvelles choses.')
.pauseFor(300)
.typeString('<br> Notre rôle sera de faire fonctionner ensemble la partie visible du site internet et la partie invisible à vos visiteur : l’outil de gestion de contenu.')
.pauseFor(300)
.typeString('<br> Nous assurerons aussi la programmation des fonctionnalités complexes qui auront été imaginées.')
.pauseFor(300)
.typeString('Notre équipe dispose d’un profil à la fois moderne et bien différent de l’image poussiéreuse que le médias peuvent donner des informaticiens. Nous somme à la pointe des nouvelles technologies.')
.start()

/*--Fin Anim Paragraphe--*/
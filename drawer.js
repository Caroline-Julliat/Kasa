import etoilePleine from "../assets/images/etoile-pleine.svg"
import etoileVide from "../assets/images/etoile-vide.svg"

for (let i = 1; i <= 5; i++) {
  if (i <= rating) {
    urlArray.push({ etoilePleine })
  } else {
    urlArray.push({ etoileVide })
  }
}

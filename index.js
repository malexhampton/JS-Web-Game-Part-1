function newImage(url, left, bottom){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}
 newImage ('assests/green-character.gif', 100, 100)
 newImage ('asests/pine-tree.png', 450, 200)
 newImage ('assets/tree.png', 200, 300)
 newImage ('assets/pillar.png', 350, 100)
 newImage ('assets/crate.png', 150, 200)
 newImage ('assets/well.png', 500, 450)

 function newItem(url, left, bottom){
    let object = newImage
    object.addEventListener("click", function() {
        object.remove()
    })
 }
 newItem ('assets/sword.png', 500, 405)
 newItem ('assets/shield.png', 165, 185)
 newItem ('assets/staff.png', 600, 100)
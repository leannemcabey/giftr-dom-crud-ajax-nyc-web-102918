document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM has been fully loaded')
  console.table(gifts)

  const giftList = document.querySelector(".gift-list")
  const createButton = document.querySelector("#gift-form-button")
  const giftNameInput = document.querySelector("#gift-name-input")
  const giftImageInput = document.querySelector("#gift-image-input")
  const search = document.querySelector('#filter-input')

  giftList.firstElementChild.remove()

  gifts.forEach(function(gift) {
    const newLiElement = document.createElement('li')
    newLiElement.innerText = gift.name

    const newImage = document.createElement('img')
    newImage.src = gift.image

    const newEditButton = document.createElement('button')
    newEditButton.innerText = 'Edit'

    const newDeleteButton = document.createElement('button')
    newDeleteButton.innerText = 'Delete'

    giftList.appendChild(newLiElement)
    giftList.appendChild(newImage)
    giftList.appendChild(newEditButton)
    giftList.appendChild(newDeleteButton)

    newDeleteButton.addEventListener('click', function(event) {
      event.preventDefault()
      newLiElement.remove()
      newImage.remove()
      newEditButton.remove()
      newDeleteButton.remove()
    })

    newEditButton.addEventListener('click', function(event) {
      event.preventDefault()
      createButton.innerText = 'Edit Gift'

      createButton.addEventListener('click', function(event) {
        event.preventDefault()
        newLiElement.innerText = giftNameInput.value
        newImage.src = giftImageInput.value
      })
    })

  })

  search.addEventListener('input', function(event) {
    event.preventDefault()

    while (giftList.firstChild) {
      giftList.removeChild(giftList.firstChild);
    }

    gifts.forEach(function(gift) {
      if (gift.name.includes(search.value)) {
        const newLiElement = document.createElement('li')
        newLiElement.innerText = gift.name

        const newImage = document.createElement('img')
        newImage.src = gift.image

        const newEditButton = document.createElement('button')
        newEditButton.innerText = 'Edit'

        const newDeleteButton = document.createElement('button')
        newDeleteButton.innerText = 'Delete'

        giftList.appendChild(newLiElement)
        giftList.appendChild(newImage)
        giftList.appendChild(newEditButton)
        giftList.appendChild(newDeleteButton)

        newDeleteButton.addEventListener('click', function(event) {
          event.preventDefault()
          newLiElement.remove()
          newImage.remove()
          newEditButton.remove()
          newDeleteButton.remove()
        })

        newEditButton.addEventListener('click', function(event) {
          event.preventDefault()
          createButton.innerText = 'Edit Gift'

          createButton.addEventListener('click', function(event) {
            event.preventDefault()
            newLiElement.innerText = giftNameInput.value
            newImage.src = giftImageInput.value
          })
        })
      }
    })
  })

})

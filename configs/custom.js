const getAuthData = () =>
  JSON.parse(
    decodeURIComponent(document.cookie.split('user_data=')[1].split(';')[0])
  )

const submitStep = () => {
  const headers = new Headers()

  headers.append('Content-Type', 'application/json')

  fetch('https://juzao--vtex.myvtex.com/_v/readme/submission', {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({
      user: getAuthData().email,
      step: window.location.pathname.split('docs/')[1],
    }),
  }).then(async (ip) => console.log(await ip.json()))
}

const setTrigger = () => {
  $('.nextSteps > table > tbody > tr > td > a').click(submitStep)
}

$(window).on('pageLoad', () => {
  setTimeout(setTrigger, 2000)
})

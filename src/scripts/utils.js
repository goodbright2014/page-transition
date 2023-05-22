export function getNavigationType(fromPath, toPath) {
  if (fromPath.startsWith('/movies') && toPath === '/') {
    return 'movie-to-home'
  }

  if (fromPath === '/tv' && toPath.startsWith('/tv/')) {
    return 'tv-to-show'
  }

  if (fromPath === '/' && toPath.startsWith('/movies')) {
    return 'home-to-movie'
  }

  if (fromPath.startsWith('/tv/') && toPath === '/tv') {
    return 'show-to-tv'
  }

  if (
    (fromPath.startsWith('/movies') || fromPath.startsWith('/tv')) &&
    toPath.startsWith('/people')
  ) {
    return 'movie-to-person'
  }

  if (
    fromPath.startsWith('/people') &&
    (toPath.startsWith('/movies') || toPath.startsWith('/tv/'))
  ) {
    return 'person-to-movie'
  }

  if (fromPath.startsWith('/transition/movies') && toPath === '/transition') {
    return 'movie-to-home'
  }

  if (fromPath === '/transition/tv' && toPath.startsWith('/transition/tv/')) {
    return 'tv-to-show'
  }

  if (fromPath === '/transition' && toPath.startsWith('/transition/movies')) {
    return 'home-to-movie'
  }

  if (fromPath.startsWith('/transition/tv/') && toPath === '/transition/tv') {
    return 'show-to-tv'
  }

  if (
    (fromPath.startsWith('/transition/movies') || fromPath.startsWith('/transition/tv')) &&
    toPath.startsWith('/transition/people')
  ) {
    return 'movie-to-person'
  }

  if (
    fromPath.startsWith('/transition/people') &&
    (toPath.startsWith('/transition/movies') || toPath.startsWith('/transition/tv/'))
  ) {
    return 'person-to-movie'
  }


  return 'other'
}

export function isBackNavigation(navigateEvent) {
  if (
    navigateEvent.navigationType === 'push' ||
    navigateEvent.navigationType === 'replace'
  ) {
    return false
  }
  if (
    navigateEvent.destination.index !== -1 &&
    navigateEvent.destination.index < navigation.currentEntry.index
  ) {
    return true
  }
  return false
}

export function shouldNotIntercept(navigationEvent) {
  return (
    navigationEvent.canIntercept === false ||
    // If this is just a hashChange,
    // just let the browser handle scrolling to the content.
    navigationEvent.hashChange ||
    // If this is a download,
    // let the browser perform the download.
    navigationEvent.downloadRequest ||
    // If this is a form submission,
    // let that go to the server.
    navigationEvent.formData
  )
}

export function useTvFragment(navigateEvent) {
  const toUrl = new URL(navigateEvent.destination.url)
  const toPath = toUrl.pathname

  return toPath.startsWith('/tv')
}

export function getPathId(path) {
  return path.split('/')[2]
}

export function updateTheDOMSomehow(data) {
  document.getElementById('content').innerHTML = data
}

export function connect() {
  return fetch('https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300')
    .then(res => res.json())
    .catch(res => res.status);
}
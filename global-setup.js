async function globalSetup() {
  // SHOGun Application-ID e.g.:
  process.env.ID = '42';
  // Host of the Application including potential paths e.g.:
  process.env.HOST = 'my.application.de';
}

export default globalSetup;

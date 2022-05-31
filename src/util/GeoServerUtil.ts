export class GeoServerUtil {

  static async logout(): Promise<boolean> {
    try {
      const response = await fetch('/geoserver/j_spring_security_logout', {
        credentials: 'include',
        mode: 'no-cors',
        method: 'POST',
        redirect: 'manual'
      });

      if (response.ok) {
        return Promise.resolve(true);
      } else {
        throw new Error(`Error while logging out from GeoServer. Status: ${response.status}, ` +
          `Message: ${response.statusText}`);
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async getGeoServerSession(timeDelay: number = 0): Promise<boolean> {
    try {
      const response = await fetch('/geoserver/www/getsession.json', {
        credentials: 'include',
        mode: 'no-cors'
      });

      // As we're in no-cors mode, no response status
      // will be available, but we assume that for status
      // code 0 the user isn't logged in and a redirect to
      // the identity provider has happened. In this case we
      // have to delay resolving the promise (with a hacky
      // timeout, if given :-/).
      if (response.status <= 0) {
        const delay = () => new Promise(res => setTimeout(res, timeDelay));

        await delay();

        return Promise.resolve(true);
      } else if (response.ok) {
        // If the status is ok, we're already logged in
        // and we can resolve directly.
        return Promise.resolve(true);
      } else {
        // Reject if something wrong happened.
        throw new Error('Error while getting a GeoServer session');
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default GeoServerUtil;

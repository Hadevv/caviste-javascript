class FetchApi {
  constructor(url) {
    this.url = url;
  }

  /**
   * Exécute une requête GET.
   *
   * @param params Les paramètres de la requête.
   * @return La réponse de la requête.
   */
  get(params) {
    return this.fetch(this.url, {
      method: "GET",
      params: params,
    });
  }

  /**
   * Exécute une requête POST.
   *
   * @param data Les données de la requête.
   * @return La réponse de la requête.
   */
  post(data) {
    return this.fetch(this.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  /**
   * Exécute une requête PUT.
   *
   * @param id L'identifiant de la ressource.
   * @param data Les données de la requête.
   * @return La réponse de la requête.
   */
  put(id, data) {
    return this.fetch(this.url + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  /**
   * Exécute une requête DELETE.
   *
   * @param id L'identifiant de la ressource.
   * @return La réponse de la requête.
   */
  delete(id) {
    return this.fetch(this.url + "/" + id, {
      method: "DELETE",
    });
  }

  /**
   * Exécute une requête avec les paramètres et les options spécifiés.
   *
   * @param url L'URL de la requête.
   * @param options Les options de la requête.
   * @return La réponse de la requête.
   */
  fetch(url, options) {
    return fetch(url, options).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.statusText);
      }
    });
  }
}

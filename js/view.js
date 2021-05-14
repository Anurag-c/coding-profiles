import icons from 'url:../icons.svg';

class View 
{
    _parentElement = document.querySelector('.dataRows');
    _spinnerElement = document.querySelector('.fluid-container');
    _message = 'incorrect response';

    render(data)
    {
        if(!data || (Array.isArray(data) && data.length === 0)) return this.renderError();
        this._data = data;
        const markup = this._generateMarkup();
        document.querySelector('.spinner')?.remove();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    _clear()
    {
        this._parentElement.innerHTML = '';
    }

    renderSpinner()
    {
        const markup = `
            <div class="spinner">
              <svg>
                <use href="${icons}#icon-loader"></use>
              </svg>
            </div>
        `;
        this._clear();
        this._spinnerElement.insertAdjacentHTML('beforeEnd', markup);
    }

    renderError(message = this._errorMessage)
    {
      const markup = `
          <div class = "error">
            <p>${message}</p>
          </div>`;
      
      this._clear();
      this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    _generateMarkup()
    {
        return this._data.map(this._generateMarkupEle).join('');
    }

    _generateMarkupEle(user, idx)
    {
        return `
        <tr>
            <th scope="row">${idx + 1}</th>
            <td>${user.roll}</td>
            <td>${user.name}</td>
            <td>${user.hackerrankSolved}</td>
            <td>${user.codechefSolved}</td>
            <td>${user.interviewbitSolved}</td>
            <td>${user.internalContest}</td>
            <td>${user.overall}</td>
        </tr>`;
    }
}

export default new View();
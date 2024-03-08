import recipeData from '@/assets/omellete.json'
import omletteImageDesktop from '@/assets/images/image-omelette.jpeg?w=300&format=webp&imagetools'
import omletteImageMobile from '@/assets/images/image-omelette.jpeg?w=150&format=webp&imagetools'
import style from './app.module.css'

function App() {
  return (
    <main className={style.app}>
      <picture>
        <source
          srcSet={omletteImageDesktop}
          type="image/webp"
          media="(width >= 768px)"
        />
        <img src={omletteImageMobile} alt="Omelette" />
      </picture>
      <h1>Simple Omellete Recipe</h1>
      <p>
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>

      <div>
        <p>Preparation time</p>
        <ul>
          <li>
            <p>
              <strong>Total: </strong>Approximately 10 minutes
            </p>
          </li>
          <li>
            <p>
              <strong>Preparation: </strong>5 minutes
            </p>
          </li>
          <li>
            <p>
              <strong>Cooking: </strong>5 minutes
            </p>
          </li>
        </ul>
      </div>

      <section aria-label="ingredients for the simple omlette recipe">
        <h2>Ingredients</h2>
        <ul>
          {recipeData.ingredients.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section aria-label="instructions for the simple omlette recipe">
        <h2>Instructions</h2>
        <ol>
          {Object.entries(recipeData.instructions).map(([key, value]) => (
            <li key={key}>
              <p>
                <strong>{key}: </strong>
                {value}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-label="nutrition of the simple omlette recipe">
        <h2>Nutrition</h2>
        <table>
          {Object.entries(recipeData.nutrition).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
        </table>
      </section>
    </main>
  )
}

export default App

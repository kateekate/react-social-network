import './App.css';
import Header from "./Components/Header";

const App = () => {
  return (
    <div id='page'>
<Header />
 <nav className = 'wrapper'>
  <div>
    Profile
  </div>
  <div> 
    Messages
  </div>
  <div>
News
  </div>
  <div>
Music
  </div>
  <div>
Settings
  </div>
 </nav>
 <main className = 'main'> 
  <div><img id='backdrop' src='https://abrakadabra.fun/uploads/posts/2021-12/1639251588_2-abrakadabra-fun-p-emodzhi-na-chernom-fone-vse-2.jpg' /></div>
 <div><img id='avatar' src='https://cdn.shopify.com/s/files/1/0014/2648/9388/products/aniplex-pvc-scale-figures-my-dress-up-darling-marin-kitagawa-swimsuit-ver-1-7-scale-figure-31778866724908_360x.jpg?v=1667515608'/></div>
 <div>My post
  <div>New post</div>
  <div>
    <div>post1</div>
    <div>post2</div>
  </div>
 </div>
 </main>
    </div>);
}

export default App;
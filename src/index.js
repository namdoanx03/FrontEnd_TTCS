import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { rootReducer } from "./redux/reducers"
import mySaga from './redux/sagas';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension"
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
// import { PersistGate } from 'redux-persist/lib/integration/react';


// const persistConfig = {
//   key: 'root',
//   storage: storage,
//   stateReconciler: autoMergeLevel2 // Xem thêm tại mục "Quá trình merge".
// };


// const pReducer = persistReducer(persistConfig, rootReducer);



const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

// const persistor = persistStore(store);

sagaMiddleware.run(mySaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <PersistGate loading = { null } persistor={persistor}> */}
      <App />
    {/* </PersistGate> */}

  </Provider>

);

reportWebVitals();

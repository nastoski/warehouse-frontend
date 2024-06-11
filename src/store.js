import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';
import { composeWithDevTools } from '@redux-devtools/extension';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'item'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

persistor.subscribe(() => {
    // log state after rehydration
    console.log('Persistor state:', store.getState());
});

export { store, persistor };
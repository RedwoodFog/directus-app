import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import auth from './modules/auth/';
import collections from './modules/collections';
import me from './modules/me';
import settings from './modules/settings';
import fields from './modules/fields';
import listingPreferences from './modules/listing-preferences';
import extensions from './modules/extensions';
import edits from './modules/edits';

import mutations from './mutations';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  state: {
    hydrating: true,
    hydratingError: null,
  },
  mutations,
  strict: debug,
  modules: {
    auth,
    collections,
    me,
    settings,
    fields,
    listingPreferences,
    extensions,
    edits,
  },
  plugins: [
    createPersistedState({
      key: 'directus',
      paths: [
        'auth.token',
        'auth.url',
        'auth.projectName',
        'edits.collection',
        'edits.primaryKey',
        'edits.values',
      ],
    }),
  ],
});

export default store;
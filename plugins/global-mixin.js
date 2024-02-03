import Vue from 'vue'
import debounce from '@/plugins/debounce'

// Make sure to pick a unique name for the flag
// so it won't conflict with any other mixin.
if (!Vue.__my_mixin__) {
  Vue.__my_mixin__ = true
  Vue.mixin({ mixins: [debounce] })
}

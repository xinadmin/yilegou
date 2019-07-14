import Vue from 'vue';
import DialogVue from './Dialog.vue';
let DialogContent = Vue.extend(DialogVue);

let content, promise;

let Dialog = {
    show: function(option) {
        option = option || {};

        if (content) DestroyNow(content);

        content = new DialogContent({
                el: document.createElement('div'),
                data: {
                    ...option,
                    callback: defaultCallback
                }
            })
            // content.vm = content.$mount();
        document.body.appendChild(content.$el);
        Vue.nextTick(() => {
            content.isShow = true;
        });
        if (typeof Promise !== 'undefined') {
            return new Promise((resolve, reject) => {
                promise = {
                    resolve,
                    reject
                }
            });
        } else {
            promise = option.callback
        }
    }
}

Dialog.close = function() {
    if (!content) {
        console.warn('Dialog not Init');
        return;
    }
    content.isShow = false;
}

const defaultCallback = action => {
    let callback = promise.callback;
    if (typeof callback === 'function') {
        callback(action);
    }
    if (promise.resolve) {
        if (action === 'confirm') {
            promise.resolve(action);
        } else {
            promise.reject(action);
        }
    }
};

const DestroyNow = (content) => {
    content.$el.remove();
    content.$destroy(true);
    content = null;
}

export default Dialog
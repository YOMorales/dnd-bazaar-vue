import _ from 'lodash';

var CommonMethods = {
    methods: {
        titleCase(string) {
            return _.startCase(string.replace('_', ' '));
        }
    },
};

export default CommonMethods;

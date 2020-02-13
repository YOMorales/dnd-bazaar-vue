import {DataTable} from 'simple-datatables';
import 'simple-datatables/dist/style.css';

var RenderDatatable = {
    props: {
        layout: {
            type: Object,
            required: false,
            default: () => {
                return {
                    top: '{search}',
                    bottom: '{pager}'
                };
            }
        },
        fixedColumns: {
            type: Boolean,
            required: false,
            default: true
        },
        fixedHeight: {
            type: Boolean,
            required: false,
            default: true
        },
        labels: {
            type: Object,
            required: false,
            default: () => {
                return {
                    placeholder: "Search...",
                    noRows: "",
                };
            }
        },
    },

    data() {
        return {
            dataTable: null,
        };
    },

    mounted() {
        this.dataTable = new DataTable(this.$el, {
            layout: this.layout,
            fixedColumns: this.fixedColumns,
            fixedHeight: this.fixedHeight,
            labels: this.labels
        });
    },
};

export default RenderDatatable;

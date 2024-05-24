"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderPrecdgProcFlowApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const SalesOrderPrecdgProcFlow_1 = require("./SalesOrderPrecdgProcFlow");
const SalesOrderPrecdgProcFlowRequestBuilder_1 = require("./SalesOrderPrecdgProcFlowRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderPrecdgProcFlowApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SalesOrderPrecdgProcFlow_1.SalesOrderPrecdgProcFlow;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_SALES_ORDER: new odata_v2_1.OneToOneLink('to_SalesOrder', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new SalesOrderPrecdgProcFlowRequestBuilder_1.SalesOrderPrecdgProcFlowRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SalesOrderPrecdgProcFlow_1.SalesOrderPrecdgProcFlow, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link salesOrder} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALES_ORDER: fieldBuilder.buildEdmTypeField('SalesOrder', 'Edm.String', false),
                /**
                 * Static representation of the {@link docRelationshipUuid} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DOC_RELATIONSHIP_UUID: fieldBuilder.buildEdmTypeField('DocRelationshipUUID', 'Edm.Guid', false),
                /**
                 * Static representation of the {@link precedingDocument} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRECEDING_DOCUMENT: fieldBuilder.buildEdmTypeField('PrecedingDocument', 'Edm.String', true),
                /**
                 * Static representation of the {@link precedingDocumentCategory} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRECEDING_DOCUMENT_CATEGORY: fieldBuilder.buildEdmTypeField('PrecedingDocumentCategory', 'Edm.String', true),
                /**
                 * Static representation of the {@link processFlowLevel} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROCESS_FLOW_LEVEL: fieldBuilder.buildEdmTypeField('ProcessFlowLevel', 'Edm.String', true),
                /**
                 * Static representation of the {@link overallSdProcessStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OVERALL_SD_PROCESS_STATUS: fieldBuilder.buildEdmTypeField('OverallSDProcessStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link creationDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATION_DATE: fieldBuilder.buildEdmTypeField('CreationDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link creationTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATION_TIME: fieldBuilder.buildEdmTypeField('CreationTime', 'Edm.Time', true),
                /**
                 * Static representation of the {@link lastChangeDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_CHANGE_DATE: fieldBuilder.buildEdmTypeField('LastChangeDate', 'Edm.DateTime', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', SalesOrderPrecdgProcFlow_1.SalesOrderPrecdgProcFlow)
            };
        }
        return this._schema;
    }
}
exports.SalesOrderPrecdgProcFlowApi = SalesOrderPrecdgProcFlowApi;
//# sourceMappingURL=SalesOrderPrecdgProcFlowApi.js.map
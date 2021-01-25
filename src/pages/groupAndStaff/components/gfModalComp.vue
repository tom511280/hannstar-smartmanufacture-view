<template>
    <div class="gfModalComp">
        <!-- gfTableComp Edit Modal -->
        <div class="modal fade" id="gfEditStaffModal" tabindex="-1" aria-labelledby="gfEditStaffModal" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5>Edit a Staff</h5>
                    </div>
                    <div class="modal-body">
                        <div class="modal-body-content">
                            <div class="modal-body-content-sub">
                                <h5>Name</h5>
                                <input type="text" v-model="addNodeName" />
                            </div>
                            <div class="modal-body-content-sub">
                                <h5>Gender</h5>
                                <div class="radio-area">
                                  <input type="radio" value="male">
                                  <p>male</p>
                                  <input type="radio" value="Female">
                                  <p>Female</p>
                                </div>
                            </div>
                            <div class="modal-body-content-sub">
                                <h5>PersonNo</h5>
                                <input type="text" v-model="addNodeName" />
                            </div>
                            <div class="modal-body-content-sub">
                                <h5>Group</h5>
                                <input type="text" v-model="addNodeName" readonly="readonly"/>
                            </div>
                            <div class="modal-body-content-sub">
                                <h5>PhoneNO</h5>
                                <input type="text" v-model="addNodeName" />
                            </div>
                            <div class="modal-body-content-sub">
                                <h5>Attendance</h5>
                                <div class="radio-area">
                                  <input type="radio" value="male">
                                  <p>Yes</p>
                                  <input type="radio" value="Female">
                                  <p>No</p>
                                </div>
                            </div>
                            <div class="modal-body-content-sub textarea">
                                <h5>Note</h5>
                                <textarea rows="3"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn button-confirm">Confirm</button>
                        <button id="gfAddModalCBT" type="button" class="btn button-cancel" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
              </div>
        </div>         
        <!-- gfTableComp Delete Modal -->
        <div class="modal fade" id="gfDeleteModal" tabindex="-1" aria-labelledby="gfDeleteModal" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5>Delete a Staff</h5>
                    </div>
                    <div class="modal-body">
                        <div class="modal-body-content">
                            <div class="modal-body-content-sub">
                                <h4>Are you want delete it?</h4>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn button-confirm">Confirm</button>
                        <button id="gfAddModalCBT" type="button" class="btn button-cancel" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
              </div>
        </div>
        <!-- gfTableComp Connect Device Modal -->
        <div class="modal fade" id="gfDeviceModal" tabindex="-1" aria-labelledby="gfDeviceModal" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5>Set staff Connect Device</h5>
                    </div>
                    <div class="modal-body">
                        <div class="gfDeviceModal-modal-body-content modal-body-content">
                            <div class="modal-body-content-sub">
                                <h5>Name</h5>
                                <input type="text" v-model="addNodeName" />
                                <br>
                            </div>
                            <div class="modal-body-content-sub">
                                <h5>Wristband Mac</h5>
                                <input type="text" v-model="addNodeName" />
                                <br>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn button-confirm">Confirm</button>
                        <button id="gfAddModalCBT" type="button" class="btn button-cancel" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
              </div>
        </div>
        <!-- gfTableComp Card Modal -->
        <div class="modal fade" id="gfCardModal" tabindex="-1" aria-labelledby="gfCardModal" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5>Set staff Card</h5>
                    </div>
                    <div class="modal-body">
                        <div class="gfCardModal-modal-body-content modal-body-content">
                            <div class="modal-body-content-sub">
                                <h5>Name</h5>
                                <input type="text" v-model="addNodeName" />
                            </div>
                            <div class="modal-body-content-sub">
                                <h5>card content</h5>
                                <input type="text" v-model="addNodeName" />
                            </div>
                            <div class="modal-body-content-sub">
                                <h5>level 1 content</h5>
                                <input type="text" v-model="addNodeName" />
                            </div>
                            <div class="modal-body-content-sub">
                                <h5>level 2 content</h5>
                                <input type="text" v-model="addNodeName" />
                            </div>
                            <div class="modal-body-content-sub">
                                <h5>level 3 content</h5>
                                <input type="text" v-model="addNodeName" />
                            </div>
                            <div class="modal-body-content-sub">
                                <h5>level 4 content</h5>
                                <input type="text" v-model="addNodeName" />
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn button-confirm">Confirm</button>
                        <button id="gfAddModalCBT" type="button" class="btn button-cancel" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
              </div>
        </div>
        <!-- gfTableComp add Modal -->
        <div class="modal fade" id="gfAddStaffModal" tabindex="-1" aria-labelledby="gfAddStaffModal" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5>Add a Staff</h5>
                    </div>
                    <div class="modal-body">
                        <div class="modal-body-content">
                            <div class="modal-body-content-sub">
                                <h5>Name</h5>
                                <input type="text" v-model="addNodeName" />
                            </div>
                            <div class="modal-body-content-sub">
                                <h5>Gender</h5>
                                <div class="radio-area">
                                  <input type="radio" value="male">
                                  <p>Male</p>
                                  <input type="radio" value="Female">
                                  <p>Female</p>
                                </div>
                            </div>
                            <div class="modal-body-content-sub">
                                <h5>PersonNo</h5>
                                <input type="text" v-model="addNodeName" />
                            </div>
                            <div class="modal-body-content-sub">
                                <h5>Group</h5>
                                <input type="text" v-model="addNodeName" readonly="readonly"/>
                            </div>
                            <div class="modal-body-content-sub">
                                <h5>PhoneNO</h5>
                                <input type="text" v-model="addNodeName" />
                            </div>
                            <div class="modal-body-content-sub">
                                <h5>Attendance</h5>
                                <div class="radio-area">
                                  <input type="radio" value="male">
                                  <p>Yes</p>
                                  <input type="radio" value="Female">
                                  <p>No</p>
                                </div>
                            </div>
                            <div class="modal-body-content-sub textarea">
                                <h5>Note</h5>
                                <textarea rows="3"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn button-confirm">Confirm</button>
                        <button id="gfAddModalCBT" type="button" class="btn button-cancel" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
              </div>
        </div>         
        <!-- gfTableComp import Modal -->
        <div class="modal fade" id="gfImportModal" tabindex="-1" aria-labelledby="gfImportModal" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5>Bulk Staff Import</h5>
                    </div>
                    <div class="modal-body">
                        <div class="modal-body-content">
                            <div class="modal-body-content-sub">
                                <h5>Upload</h5>
                                <button @click="$refs.staffFile.click()" type="button" class="btn button-confirm fileupload-btn">Select File</button>
                                <input ref="staffFile" type="file" class="d-none" v-on:change="handleFileUpload('staff')">
                                <p class="fileupload-content">{{staffFile.name}}</p>
                            </div>
                            <div class="modal-body-content-sub">
                                <h5>Download</h5>
                                <button type="button" class="btn button-confirm download-btn">Download Template</button>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn button-confirm">Submit</button>
                        <button id="gfAddModalCBT" type="button" class="btn button-cancel" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
              </div>
        </div>
        <!-- gfTableComp Pairing Modal -->
        <div class="modal fade" id="gfPairingModal" tabindex="-1" aria-labelledby="gfPairingModal" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5>Bulk Pairing Import</h5>
                    </div>
                    <div class="modal-body">
                        <div class="modal-body-content">
                            <div class="modal-body-content-sub">
                                <h5>Upload</h5>
                                <button @click="$refs.pairingFile.click()" type="button" class="btn button-confirm fileupload-btn">Select File</button>
                                <input ref="pairingFile" type="file" class="d-none" v-on:change="handleFileUpload('pairing')">
                                <p class="fileupload-content">{{pairingFile.name}}</p>
                            </div>
                            <div class="modal-body-content-sub">
                                <h5>Download</h5>
                                <button type="button" class="btn button-confirm download-btn">Download Template</button>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn button-confirm">Submit</button>
                        <button id="gfAddModalCBT" type="button" class="btn button-cancel" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
              </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            staffFile: "",
            pairingFile: "",
            addNodeName: ""
        }
    },
    methods:{
        handleFileUpload: function (type) {
            if(type == 'staff') this.staffFile = this.$refs.staffFile.files[0];
            if(type == 'pairing') this.pairingFile = this.$refs.pairingFile.files[0];
        },
    }
}
</script>
<style scoped>
.radio-area {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.radio-area > input[type=radio] {
  margin-right: 0.5vw;
}
.radio-area > p {
  margin-right: 1vw;
}
/* textarea {
  width: 45%;
} */

.modal-dialog{
    width: 25vw;
}
#gfDeleteModal .modal-dialog{
    width: 15vw;
}
/* #gfEditStaffModal > .modal-dialog,
#gfDeviceModal > .modal-dialog,
#gfCardModal > .modal-dialog  {
    width: 20vw;
} */

#gfDeleteModal .modal-dialog > .modal-content > .modal-body > .modal-body-content > .modal-body-content-sub > h4{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
}
.fileupload-btn {
    margin-left: 1%;
    background-color:#ef8059;
}
.download-btn {
    margin-left: 1%;
    background-color:#58b368;
}
.fileupload-content {
    margin-left: 1vw;
    color: #a1a1a1;
}
.gfDeviceModal-modal-body-content > .modal-body-content-sub > h5 {
    width: 40%;
}
.gfDeviceModal-modal-body-content > .modal-body-content-sub > input[type=text] {
    width: 50%;
}
.gfCardModal-modal-body-content > .modal-body-content-sub > h5 {
    width: 40%;
}
.gfCardModal-modal-body-content > .modal-body-content-sub > input[type=text] {
    width: 50%;
}
</style>
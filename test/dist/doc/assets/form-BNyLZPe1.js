import{d as V}from"./demonstrable-C-PdKjR2.js";import{t as y}from"./translatable-CDagqyqv.js";import q from"./form-DKtbMJE7.js";import{_ as E,a as d,b as i,w as a,r as n,o as p,F as f,g as T,d as e,t as o,e as k}from"./index-DOX8ZtlD.js";import"./composable-CshUTKfl.js";const F={"page.component.form.email":"Enter an email","page.component.form.email.v-model":"The current v-model value for email is","page.component.form.password":"Enter a password","page.component.form.password.v-model":"The current v-model value for password is","page.component.form.submit":"Submit"},B={},H={en:F,fr:B},v={attrs:[],examples:[{markup:`
                <vui-form>
                    <section>
                        <fieldset>
                            <div class="fieldset-item">
                                <label for="email">
                                    Email
                                </label>
                                <div class="input">
                                    <vui-input
                                        id="email"
                                        v-model="form.email"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </div>
                            </div>
                        </fieldset>
                    </section>
                    <section>
                        <fieldset>
                            <div class="fieldset-item">
                                <label for="password">
                                    Password
                                </label>
                                <div class="input">
                                    <vui-input
                                        id="password"
                                        v-model="form.password"
                                        type="password"
                                        name="password"
                                        required
                                    />
                                </div>
                            </div>
                        </fieldset>
                    </section>
                    <section class="section--submit">
                        <vui-button
                            type="button"
                        >
                            Submit
                        </vui-button>
                    </section>
                </vui-form>
            `,props:{id:"form-1"}}],props:[],slots:[]},L={name:"ViewForm",mixins:[V],setup(){return y(H),{}},data(){return{form:{email:null,password:null}}},computed:{doc(){return v},examples(){return this.docExamples(q,v)}}},N={class:"view-form"},P={class:"fieldset-item"},S={for:"email"},U={class:"input"},$={class:"fieldset-item"},C={for:"password"},M={class:"input"},x={class:"fieldset-item"},D={for:"password"},j={class:"input"},z={class:"section--submit"},A=["innerHTML"],G={class:"title"};function I(s,l,J,K,t,_){const m=n("vui-input"),w=n("vui-button"),b=n("vui-form"),u=n("vui-grid-unit"),g=n("vui-table"),h=n("vui-grid");return p(),d("div",N,[i(h,{"col-sm":"1","col-md":"2"},{default:a(()=>[i(u,{class:"examples"},{default:a(()=>[(p(!0),d(f,null,T(_.examples,c=>(p(),d(f,{key:`example-${c.props.id}`},[i(b,null,{default:a(()=>[e("section",null,[e("fieldset",null,[e("div",P,[e("label",S,o(s.$t("page.component.form.email")),1),e("div",U,[i(m,{id:"email",modelValue:t.form.email,"onUpdate:modelValue":l[0]||(l[0]=r=>t.form.email=r),type:"email",name:"email",required:""},null,8,["modelValue"]),e("p",null,o(s.$t("page.component.form.email.v-model"))+": "+o(t.form.email),1)])])])]),e("section",null,[e("fieldset",null,[e("div",$,[e("label",C,o(s.$t("page.component.form.password")),1),e("div",M,[i(m,{id:"password",modelValue:t.form.password,"onUpdate:modelValue":l[1]||(l[1]=r=>t.form.password=r),type:"password",name:"password",required:""},null,8,["modelValue"]),e("p",null,o(s.$t("page.component.form.password.v-model"))+": "+o(t.form.password),1)])])]),e("fieldset",null,[e("div",x,[e("label",D,o(s.$t("page.component.form.password")),1),e("div",j,[i(m,{id:"password",modelValue:t.form.newpassword,"onUpdate:modelValue":l[2]||(l[2]=r=>t.form.newpassword=r),type:"password",name:"password",required:""},null,8,["modelValue"]),e("p",null,o(s.$t("page.component.form.password.v-model"))+": "+o(t.form.newpassword),1)])])])]),e("section",z,[i(w,{type:"button"},{default:a(()=>[k(o(s.$t("page.component.form.submit")),1)]),_:1})])]),_:1}),e("div",{class:"highlighted-code",innerHTML:c.highlighted},null,8,A)],64))),128))]),_:1}),i(u,{class:"api-options"},{default:a(()=>[e("h2",G,o(s.$t("page.component.h2.api")),1),i(g,{"item-label":"label","item-value":"value",headers:s.docPropsHeaders,items:s.docProps},null,8,["headers","items"])]),_:1})]),_:1})])}const Y=E(L,[["render",I]]);export{Y as default};

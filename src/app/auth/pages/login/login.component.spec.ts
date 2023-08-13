import { TestBed } from "@angular/core/testing"
import { LoginComponent } from "./login.component"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input"
import { HttpClientTestingModule } from "@angular/common/http/testing"
describe('LoginComponent', ()=>{
    let component: LoginComponent;
    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports:[MatFormFieldModule, MatInputModule, HttpClientTestingModule]
        })
        component=TestBed.createComponent(LoginComponent).componentInstance
        
    })

    it('El formulario sera invalido si los campos quedan en blanco', ()=>{
        component.emailControl.setValue('');
        component.passwordControl.setValue('');
        expect(component.loginForm.invalid).toBe(true)
    })
})
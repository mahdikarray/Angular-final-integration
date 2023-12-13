import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Foyer} from "../../../../Models/Foyer";
import {BlocService} from "../../../services/bloc.service";
import {FoyerService} from "../../../services/foyer.service";
import {Bloc} from "../../../../Models/Bloc";
import {Router} from "@angular/router";


@Component({
  selector: 'app-add-bloc',
  templateUrl: './add-bloc.component.html',
  styleUrls: ['./add-bloc.component.scss']
})
export class AddBlocComponent implements OnInit {
  blocForm: FormGroup;
  foyers!: Foyer[];

  constructor(
    private fb: FormBuilder,
    private blocService: BlocService,
    private foyerService: FoyerService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.blocForm = this.fb.group({
      nomBloc: ['', [Validators.required, Validators.minLength(3)]],
      capaciteBloc: [null, [Validators.required, Validators.pattern('^[0-9]+$')]],
      foyer: [[]],
    });
  }

  ngOnInit(): void {
    this.foyerService.getFoyer().subscribe((data) => {
      this.foyers = data;
      console.log(data);
    });
  }

  onSubmit(event: Event) {
    event.preventDefault();

    const newBloc: Bloc = this.blocForm.value;

    this.blocService.addBloc(newBloc).subscribe((result) => {
      console.log('Bloc ajouté avec succès :', result);


      const selectedFoyerNom: string = this.blocForm.get('foyer')?.value[0]?.nomFoyer;

      this.blocService.affecterBlocAFoyer(result.nomBloc.toLowerCase(), selectedFoyerNom).subscribe((resultAffectation) => {
        this.snackBar.open('Affectation faite avec succès', 'Fermer', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });

        this.router.navigate(['/main/admin/ui-components/bloc']);

        this.blocForm.reset();
      });
    });
  }
}

import {Component, OnInit} from '@angular/core';
import {Bundle} from "../../model/bundle";
import {BundlesService} from "../../services/bundles.service";

@Component({
    selector: 'app-bundles',
    templateUrl: './bundles.component.html',
    styleUrls: ['./bundles.component.css']
})
export class BundlesComponent implements OnInit {
    bundles: Bundle[] = [];

    constructor(private bundlesService: BundlesService) {
    }

    ngOnInit(): void {
        this.loadBundles();
    }

    private loadBundles(): void {
        this.bundlesService.getAll().subscribe(bundles => {
            this.bundles.push(...bundles);
            console.log('Bundles cargados:', this.bundles);
        });

    }

}

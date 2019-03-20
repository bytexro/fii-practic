@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroes: Hero[] = [];

  constructor(
      private backend: BackendService,
      private logger: Logger) { }

  getHeroes() {
    this.backend.getAll(Hero).then( (heroes: Hero[]) => {
      this.logger.log(`Fetched ${heroes.length} heroes.`);
      this.heroes.push(...heroes); // fill cache
    });
    return this.heroes;
  }
}

@Component({
  selector:    'app-hero-list',
  templateUrl: './hero-list.component.html',
  providers:  [ HeroService ]
})
export class HeroListComponent implements OnInit {
  constructor(private service: HeroService) {
  }
}
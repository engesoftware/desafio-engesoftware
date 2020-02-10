import { Router } from '@angular/router';
import { EditarComponent } from './editar/editar.component';
import { AuthService } from './../auth.service';
import { HttpClient} from '@angular/common/http';
import { Component} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatSort, MatTableDataSource } from '@angular/material';

export class Group {
	level = 0;
	expanded = false;
	totalCounts = 0;
}

export class Contato {
	id: string = '';
	nome: string = '';
	email: string = '';
	telefone: string = '';
	empresa: string = '';
	letra: string = '';
}

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})

export class ContatoComponent{

  public dataFields=[
    {name:'id'},
    {name:'letra'},
    {name:'nome',title:"Nome"},
    {name:'telefone',title:'Telefone'},
    {name:'email',title:'E-Mail'},
    {name:'empresa',title:'Empresa'},
  ];

  public allColumns = ['nome','telefone','email','empresa'];
  public displayedColumns = ['nome','telefone','email','empresa','editar','excluir'];
  public groupByColumns = ['letra'];
  public allData;
	public _allGroup;
  
  public expandedContato = [];
  public expandedSubContato: Contato[] = [];
  
  public rowData=new MatTableDataSource<any | Group>([]);
	public resp;

  
  constructor(private http: HttpClient,private auth:AuthService, private modal: NgbModal,private router: Router) { 
    this.getContatos();      
  }
      
  getContatos(){
   
    this.http.get('http://localhost:8000/api/contato',{observe:'body'}).subscribe((data)=>{
        this.allData = data;
        this.rowData.data = this.getGroups(this.allData, this.groupByColumns);    
      },
      (err: any) => console.log(err)
    );
  } 

  editar(el){
    const modalRef = this.modal.open(EditarComponent,el);
    modalRef.componentInstance.id= el.id;
    modalRef.componentInstance.nome= el.nome;
    modalRef.componentInstance.telefone= el.telefone;
    modalRef.componentInstance.email= el.email;
    modalRef.componentInstance.empresa= el.empresa;
    
  }

  excluir(el){    
    if(confirm("Atenção: O contato '"+el.nome+"' será excluído!")){
      this.http.delete('http://localhost:8000/api/contato/'+el.id,{ observe: 'body'}).subscribe(data=>{
        this.resp=data;
        if(this.resp.success){
          alert('Contato alterado com sucesso');
          top.location.href=this.router.url;
        }else if(this.resp.error){
          alert(this.resp.error.message);
          console.log(this.resp.error);
        }else{
          alert("Erro ao efetuar a operação")
        }

      },err=>{
        this.resp=err;
        if(this.resp.error.message){
          alert(this.resp.error.message);
        }else{
          alert("Erro ao efetuar a operação")
        }
        console.log(err);
      })
    }
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.rowData.filter = filterValue.trim().toLowerCase();
  }

	groupHeaderClick(row) {
		if (row.expanded) {
			row.expanded = false;
			this.rowData.data = this.getGroups(this.allData, this.groupByColumns);
		} else {
			row.expanded = true;
			this.expandedContato = row;
			this.rowData.data = this.addGroupsNew(this._allGroup, this.allData, this.groupByColumns, row);
		}
	}

	getGroups(data: any[], groupByColumns: string[]): any[] {
		const rootGroup = new Group();
		rootGroup.expanded = true;
		return this.getGroupList(data, 0, groupByColumns, rootGroup);
	}

	getGroupList(data: any[], level: number = 0, groupByColumns: string[], parent: Group): any[] {
		if (level >= groupByColumns.length) {
			return data;
		}
		let groups = this.uniqueBy(
			data.map(
				row => {
					const result = new Group();
					result.level = level + 1;
					for (let i = 0; i <= level; i++) {
						result[groupByColumns[i]] = row[groupByColumns[i]];
					}
					return result;
				}
			),
			JSON.stringify);

		const currentColumn = groupByColumns[level];
		let subGroups = [];
		groups.forEach(group => {
			const rowsInGroup = data.filter(row => group[currentColumn] === row[currentColumn]);
			group.totalCounts = rowsInGroup.length;
			this.expandedSubContato = [];
		});
		groups = groups.sort((a: Contato, b: Contato) => {
			const isAsc = 'asc';
			return this.compare(a.letra, b.letra, isAsc);

		});
		this._allGroup = groups;
		return groups;
	}

	addGroupsNew(allGroup: any[], data: any[], groupByColumns: string[], dataRow: any): any[] {
		const rootGroup = new Group();
		rootGroup.expanded = true;
		return this.getSublevelNew(allGroup, data, 0, groupByColumns, rootGroup, dataRow);
	}

	getSublevelNew(allGroup: any[], data: any[], level: number, groupByColumns: string[], parent: Group, dataRow: any): any[] {
		if (level >= groupByColumns.length) {
			return data;
		}
		const currentColumn = groupByColumns[level];
		let subGroups = [];
		allGroup.forEach(group => {
			const rowsInGroup = data.filter(row => group[currentColumn] === row[currentColumn]);
			group.totalCounts = rowsInGroup.length;

			if (group.letra == dataRow.letra.toString()) {
				group.expanded = dataRow.expanded;
				const subGroup = this.getSublevelNew(allGroup, rowsInGroup, level + 1, groupByColumns, group, dataRow.letra.toString());
				this.expandedSubContato = subGroup;
				subGroup.unshift(group);
				subGroups = subGroups.concat(subGroup);
			} else {
				subGroups = subGroups.concat(group);
			}
		});
		return subGroups;
	}

	uniqueBy(a, key) {
		const seen = {};
		return a.filter((item) => {
			const k = key(item);
			return seen.hasOwnProperty(k) ? false : (seen[k] = true);
		});
	}

	isGroup(index, item): boolean {
		return item.level;
	}
  
  compare(a, b, isAsc) {
		return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
	}
  
  onSortData(sort: MatSort) {
		let data = this.allData;
		const index = data.findIndex(x => x['level'] == 1);
		if (sort.active && sort.direction !== '') {
			if (index > -1) {
				data.splice(index, 1);
			}

			data = data.sort((a: Contato, b: Contato) => {
				const isAsc = sort.direction === 'asc';
				
				
					return this.compare(a.letra, b.letra, isAsc);
				
				
			});
		}
		this.rowData.data = this.addGroupsNew(this._allGroup, data, this.groupByColumns, this.expandedContato);
	}


}
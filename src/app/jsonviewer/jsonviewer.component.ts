import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-jsonviewer',
  templateUrl: './jsonviewer.component.html',
  styleUrls: ['./jsonviewer.component.css']
})
export class JsonviewerComponent implements OnInit {
  main_json:any = "";
  sample_json:any = [{"Cheat Name":"Drunkenness","Cheat Code":"1999547867","Cheat Description":"Increases your drunkeness, making you clumsy."},{"Cheat Name":"Fast Swimming","Cheat Code":"199946844557","Cheat Description":"Increases your swimming speed."},{"Cheat Name":"Fast Sprinting","Cheat Code":"19992282463","Cheat Description":"Increases sprint speed."},{"Cheat Name":"Max Health and Armour","Cheat Code":"1999887853","Cheat Description":"Gives you full body armour and health."},{"Cheat Name":"Super Jump","Cheat Code":"19994678648","Cheat Description":"Gives you a much higher jump."},{"Cheat Name":"Invincibility","Cheat Code":"19997246545537","Cheat Description":"Blocks all damage."},{"Cheat Name":"Recharge Special Ability","Cheat Code":"19997693787","Cheat Description":"Gives you a full bar of energy for your character's ability."},{"Cheat Name":"SlowMotion Aiming","Cheat Code":"19993323393","Cheat Description":"Aiming down sights will activatie slowmotion mode."},{"Cheat Name":"Give Parachute","Cheat Code":"19997593483","Cheat Description":"Adds a usable Parachute to your character."},{"Cheat Name":"Skyfall","Cheat Code":"19997593255","Cheat Description":"Drops you out of the air from high in the sky."},{"Cheat Name":"Raise Wanted Level","Cheat Code":"199938448483","Cheat Description":"Increases your Wanted level by one star."},{"Cheat Name":"Lower Wanted Level","Cheat Code":"199952993787","Cheat Description":"Decreases your Wanted level by one star."},{"Cheat Name":"Give Weapons and Ammo","Cheat Code":"1999866587","Cheat Description":"Gives you a Sawn Off Shotgun, Sniper Rifle, Assault Rifle, SMG, Pistol, Grenades, RPG and Knife"},{"Cheat Name":"Explosive Melee Attacks","Cheat Code":"199946842637","Cheat Description":"Punches make things explode."},{"Cheat Name":"Explosive Rounds","Cheat Code":"1999444439","Cheat Description":"Shooting things makes them explode."},{"Cheat Name":"Flame Rounds","Cheat Code":"19994623634279","Cheat Description":"Shooting things sets them on fire."},{"Cheat Name":"Change Weather","Cheat Code":"19996253487246","Cheat Description":"Cycles through one of the nine weather patterns."},{"Cheat Name":"Change Gravity","Cheat Code":"19993562837","Cheat Description":"Activates \"moon gravity\" in the world."},{"Cheat Name":"Reduce Friction","Cheat Code":"19997669329","Cheat Description":"Causes cars to slide around everywhere."},{"Cheat Name":"Slow Motion","Cheat Code":"1999756966","Cheat Description":"Slows down everything in the world, up to five times before returning to normal."},{"Cheat Name":"Caddy Vehicle","Cheat Code":"19994653461","Cheat Description":"Spawns a golf caddy."},{"Cheat Name":"Comet Vehicle","Cheat Code":"199926638","Cheat Description":"Spawns a 'Comet' car."},{"Cheat Name":"Rapid GT Vehicle","Cheat Code":"19997274348","Cheat Description":"Spawns a 'Rapid GT' car."},{"Cheat Name":"Stretch Limo Vehicle","Cheat Code":"199984639663","Cheat Description":"Spawns a Stretch Limo."},{"Cheat Name":"Garbage Truck Vehicle","Cheat Code":"19998727433","Cheat Description":"Spawns a Garbage Truck."},{"Cheat Name":"BMX Bike","Cheat Code":"1999226348","Cheat Description":"Spawns a BMX."},{"Cheat Name":"Maibatsu Sanches","Cheat Code":"19996337623","Cheat Description":"Spawns a Maibatsu Sanchez."},{"Cheat Name":"Shitzu PCJ 600","Cheat Code":"1999762538","Cheat Description":"Spawns a Shitzu PCJ 600."},{"Cheat Name":"Buzzard Helicopter","Cheat Code":"19992899633","Cheat Description":"Spawns a Buzzard Helicopter."},{"Cheat Name":"Duster Plane","Cheat Code":"199935977729","Cheat Description":"Spawns a Duster Plane."},{"Cheat Name":"Stunt Plane","Cheat Code":"1999227678676","Cheat Description":"Spawns a Stunt Plane."},{"Cheat Name":"Duke O'Death Car","Cheat Code":"199933284227","Cheat Description":"Spawns a Duke O'Death car, but only after completing the \"Duel\" random event."},{"Cheat Name":"Kraken Sub","Cheat Code":"19992822537","Cheat Description":"Spawns a Kraken submarine, but only after completing the \"Wildlife Photography Challenge\"."},{"Cheat Name":"Dodo Airplane","Cheat Code":"19993984628","Cheat Description":"Spans a Dodo Airplane, but only after completing the \"Sea Plane\" random event."}];
  _state_table:boolean = false;
  keys:any = [];
  _table_json: any;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  gotoprojects() {
    this.router.navigate(["projects"])
  }

  add_sample_json() {
    this.main_json = JSON.stringify(this.sample_json, null, 2);
  }

  clear_json() {
    this.main_json = "";  
    this._state_table = false;
    this.keys = [];
    this._table_json = [];
  };

  getValue(arr:any, key:any) {
    console.log(arr, key);
    return arr[key];
  }

  show_table() {    
    var obj = JSON.parse(this.main_json);
    this.keys = [];
    this._table_json = [];
    for (let i=0; i<obj.length; i++) {      
      let curr_obj = obj[i];
      let curr_object_keys = Object.keys(curr_obj);
      this._table_json.push(curr_obj);
      curr_object_keys.forEach(element => {
        if (this.keys.indexOf(element) === -1){
          this.keys.push(element);
        }
      })
    }   

    console.log(this._table_json, this.keys);
    this._state_table = true; 
  }
}
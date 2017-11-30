'use strict';

(function($){

  $(function() {

    var datascource = {
      'id': '1',
      'name': 'M. SALE Charles ',
      'title': 'PCA',
      'children': [
        { 'id': '2', 'name': 'Prof ANGWAFO III,Fru Fobuzshi', 'title': 'Directeur Général','className': 'middle-level', 

          'children': [
                    { 'id': '3', 'name': 'Dr NSOM MBA Charles', 'title': 'Directeur Général Adjoint','className': 'product-dept', 

                      'children': [
                    { 'id': '4', 'name': 'Prof BELLA Lucienne', 'title': 'Direction Médicale','className': 'pipeline1' ,

        'children': [
        { 'id': '25', 'name': 'Mme BIH Immaculate ', 'title': 'sous direction Médico-Sanitaire et Nursing','className': 'rd1-dept',

               'children': [
                    { 'id': '26', 'name': 'M. LELE Samuel', 'title': 'Service de soins infirmiers','className':'frontend1'},
                    { 'id': '27', 'name': ' M. DOHBIT Julius ', 'title': 'Service de l\'Evaluation et la Recherche','className':'frontend1'}
          ]
          },
            { 'id': '28', 'name': 'Dr FOUMANE Pascal', 'title': 'service de Gynéco-Obstétrique et sous spécialités cytogénétique','className': 'rd-dept' },
            { 'id': '29', 'name': 'Prof Andreas CHIABI', 'title': 'service de pédiatrie et sous spécialités','className': 'rd-dept'},
            { 'id': '30', 'name': 'Prof ANDZE Gervais', 'title': 'service de chirurgie Générale et sous spécialités','className': 'rd-dept' },
            { 'id': '31', 'name': 'Prof BELLA Lucienne ', 'title': 'service d\'Ophtamologie, d\'Odonto-Stomatologie et d\'Oto-RhinoLaryngologie','className': 'rd-dept' },
            { 'id': '32', 'name': 'Dr NKEUDJOUA Daniel ', 'title': 'Service des Urgences, de Médecine Générale et des explorations fonctionnelles ','className': 'rd-dept' },
            { 'id': '33', 'name': 'Dr FANTA ALAMINE', 'title': 'Service de la pharmacie','className': 'rd-dept' },
            { 'id': '34', 'name': 'Prof SANDO Zacharie', 'title': 'service d\'Anatomo-Pathologie','className': 'rd-dept'},
            { 'id': '35', 'name': '', 'title': 'service de la radiologie et Imagerie Médicale','className': 'rd-dept'},
            { 'id': '36', 'name': '', 'title': 'Service de biologie clinique','className': 'rd-dept'},
            { 'id': '37', 'name': '', 'title': 'Service de Dermatologie et maladie infectieuses','className': 'rd-dept'},
            { 'id': '38', 'name': 'Pr ZHANG MOGJIANG', 'title': 'Service d\'Acupuncture et de physiothérapie','className': 'rd-dept'},
            { 'id': '39', 'name': 'Prof ZE Jacqueline', 'title': 'Service de Réanimation et Anesthésie','className': 'rd-dept'}
            
           ]
          },

          { 'id': '5', 'name': 'Mme MANG Béatrice' , 'title': 'Direction Administrative et Financiére' ,'className': 'pipeline1' ,


        'children': [
            { 'id': '40', 'name': 'M. TAFEN Willy', 'title': 'Sous-Direction Financière et Comptable', 'className': 'rd1-dept',

              'children': [
                    { 'id': '42', 'name': 'M. TODZONG IVENSE', 'title': 'Service du budget et des engagements','className':'frontend1'},
                    { 'id': '43', 'name': 'Mme FONKWO Jeanne', 'title': 'Service de la solde','className':'frontend1'},
                    { 'id': '44', 'name': 'M. NGA Sylvain', 'title': 'Service de la comptabilité, de la Facturation et du recouvrement','className':'frontend1'},
                { 'id': '45', 'name': 'M. DELPHIN HAGBE', 'title': 'Service des assurences','className':'frontend1'}    
          ]

          },
            { 'id': '41', 'name': 'Mme Jacqueline AKA\'A', 'title': 'Sous-direction des Ressources Humaines et Affaires Générales', 'className': 'rd1-dept',
                'children': [
                              { 'id': '46', 'name': 'M. ENAMA Benoit', 'title': 'Service de la formation et de suivi des carriéres','className':'frontend1' },
                              { 'id': '47', 'name': 'MOYO Jophain', 'title': 'Service du personnel','className':'frontend1'},

                            { 'id': '48', 'name': 'M. ABENG  Louis', 'title': 'Service des affaires Générales','className':'frontend1'}
                           ] 
          }
          ]
      },


         { 'id': '6', 'name': '', 'title': 'SERVICES','className': 'pipeline1' , 
          'children': [
          
          { 'id': '8', 'name': 'M.ABADA  Jean', 'title': 'Service d\'accueil Orientation, du protocole des relations publiques et du marketing','className': 'rd-dept' },
            { 'id': '9', 'name': 'Mme DIENGUE Hortense', 'title': 'Service de la documentation, des archives et de la Communication','className': 'rd-dept'},
            
            
            { 'id': '10', 'name': 'M. NYATTE Jean ', 'title': 'Service Technique et de la maintenance','className': 'rd-dept' },
            
            { 'id': '11', 'name': 'M. NDJIKAM Zéphirin', 'title': 'Service du suivi, de l\'Audit et du controle Interne','className': 'rd-dept' },
            
            { 'id': '12', 'name': 'M. SECBE Louis-Paul', 'title': 'Service de la coopération','className': 'rd-dept' },
            { 'id': '13', 'name': 'M. TAFEN Willy', 'title': 'Service des informations sanitaires et de l\'informatique','className': 'rd-dept' },
            { 'id': '14', 'name': 'Mme NGO Marie Reine', 'title': 'Service du contentieux et des affaires juridiques','className': 'rd-dept' },
            { 'id': '15', 'name': 'M. UNITY Elias', 'title': 'Service de la comptabilité Matières','className': 'rd-dept'}
            
            ]
        },
        
        { 'id': '7', 'name': '', 'title': 'COMITES','className': 'pipeline1' , 
          'children': [
            { 'id': '16', 'name': '', 'title': 'comité Scientifique, Thérapeutique, d\'Ethique et de Recherche','className': 'rd-dept' },
            { 'id': '17', 'name': '', 'title': 'comité d\'Hygiène hospitalière','className': 'rd-dept'},
            { 'id': '18', 'name': '', 'title': 'Comité Paritaire','className': 'rd-dept' },
            { 'id': '19', 'name': '', 'title': 'Conseil de Direction ','className': 'rd-dept' },
            { 'id': '20', 'name': '', 'title': 'Conseil de discipline','className': 'rd-dept' },
            { 'id': '22', 'name': '', 'title': 'Cellule de lutte contre la corruption','className': 'rd-dept' },
            { 'id': '23', 'name': '', 'title': 'Comité de l\'Indigence','className': 'rd-dept' },
            { 'id': '24', 'name': '', 'title': 'Comité de Fetes et des Réceptions','className': 'rd-dept'}
          ]

         }, 
         

                    ]


                  }
          ]
         },
                 
      ]
    };

    $('#chart-container').orgchart({
      'data' : datascource,
      'depth':10,
      'nodeContent': 'title',
      'verticalDepth': 5,
      'nodeID': 'id',
      'createNode': function($node, data) {
        var secondMenuIcon = $('<i>', {
          'class': 'fa fa-info-circle second-menu-icon',
          click: function() {
            $(this).siblings('.second-menu').toggle();
          }
        });
        var secondMenu = '<div class="second-menu"><img class="avatar" src="images/avatar/' + data.id + '.jpg"></div>';
        $node.append(secondMenuIcon).append(secondMenu);
      }
    });

  });

})(jQuery);
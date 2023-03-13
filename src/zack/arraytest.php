
  <?php
    $cars = array("Volvo", "BMW", "Toyota");
    echo "I like " . $cars[0] . ", " . $cars[1] . " and " . $cars[2] . ".";
    ?>

<?php
$dice1 = rand(1, 6);
$dice2 = rand(1, 6);
$sum = $dice1 + $dice2;
$diceNums = array("One", "Two", "Three", "Four","Five","Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve");
$diceWord1 = $diceNums[$dice1-1];
$diceWord2 = $diceNums[$dice2-1];
$wordSum = $diceNums[$sum-1];

echo "The first dice rolled a $diceWord1 and the second rolled a $diceWord2. The sum of both dice is $wordSum"
?>

<?php
$dice1 = rand(1, 6);
$dice2 = rand(1, 6);
$sum = $dice1 + $dice2;
echo "The first dice rolled a $dice1 and the second rolled a $dice2. The sum of both dice is $sum"
?>
<?php
     // hw/insitem.php
     include __DIR__ . '/../include/connect.php';
     include __DIR__ . '/../include/function.php';
     include 'formcolor.html';
     $colorid = getColorId($pdo, $_POST['color']);
      if ($colorid == null and $_POST['color'] != null}
        {

  $col = 'insert into  color (name) values (:color)';
        $c = $pdo->prepare($col);
        $c->bindValue(':color', $_POST['color']);
        $c->execute();

        $colorid = getColorId($pdo, $_POST['color']);
        echo '</br>';
        echo $colorid;
        echo '</br>';
        echo $_POST['color']. 'has been added to the color table.';
        }
     $itemid = getItemId($pdo, $_POST['item_id']);

      echo $itemid;
     try
          {
          if ($itemid >= 1)
               {
                echo 'Item ' . $_POST['item_id']
                    . ' already exists in item. Program terminated';
               exit();
               }
          else
               {
               $sql = 'insert into item (item_id,item, colorid) values
                         (:item_id,:item,:colorid)';
               $s = $pdo->prepare($sql);
               $s->bindValue(':item_id', $_POST['item_id']);
               $s->bindValue(':item', $_POST['item']);
               $s->bindValue(':color', $_POST['color']);
               $s->execute();
               echo '<br />';
               echo 'Item ' . $_POST['item_id']
                    . ': ' . $_POST['item']
                    . ' has been inserted into the item table.';
               }
          }
     catch (PDOException $e)
          {
          echo $sql;
          }
?>
